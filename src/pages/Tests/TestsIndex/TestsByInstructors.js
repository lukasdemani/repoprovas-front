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

    const promise2 = api.getTests(token);
    promise2.then((response) => {
      setTests(response.data);
      
    })
    promise2.catch((error) => {
      console.log(error)
    })

  }, [])

  console.log(subjects)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {instructors.map((instructor) => (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
          <Typography>
            {tests.filter((test) => test.disciplineId === instructor.id)}
          </Typography>
        </AccordionDetails>
      </Accordion>)
      )}
      
    </div>
  );
}