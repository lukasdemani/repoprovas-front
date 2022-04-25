import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import api from "../../../services/api"


export default function TestsByInstructors() {
  const [expanded, setExpanded] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [instructors, setInstructors] = React.useState([]);
  const [tests, setTests] = React.useState([]);
  const [subjects, setSubjects] = React.useState([]);
  const { token } = useContext(AuthContext);

  React.useEffect(() => {
    const promise = api.getInstructors(token);

    promise.then((response) => {
      setInstructors(response.data);
      
    })
    promise.catch((error) => {
      console.log(error)
    })

  }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    const promise = api.getTestsByInstructor(panel);

    promise.then((response) => {
      setTests(response.data)
    })
    promise.catch((error) => {
      console.log(error)
    })
  };

  return (
    <div>
      {instructors.map((instructor) => (
        <Accordion expanded={expanded === instructor.id} onChange={handleChange(instructor.id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {instructor.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            {tests.map((test) => (
                <Typography>
                    {test.name}
                </Typography>
            ))}
          
        </AccordionDetails>
      </Accordion>)
      )}
      
    </div>
  );
}