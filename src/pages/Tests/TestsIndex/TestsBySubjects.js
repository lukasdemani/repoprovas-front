import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import api from '../../../services/api';
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";


export default function TestsBySubjects() {
  const [expandedTerm, setExpandedTerm] = React.useState(false);
  const [expandedSubject, setExpandedSubject] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [terms, setTerms] = React.useState([]);
  const [tests, setTests] = React.useState([]);
  const [subjects, setSubjects] = React.useState([]);
  const { token } = useContext(AuthContext);

  React.useEffect(() => {
    const promise = api.getTerms(token);

    promise.then((response) => {
      setTerms(response.data);
      
    })
    promise.catch((error) => {
      console.log(error)
    })

  }, [])

  const handleChangeTerm = (panel) => (event, isExpanded) => {
    setExpandedTerm(isExpanded ? panel : false);
    const promise = api.getSubjectsByTerms(panel);

    promise.then((response) => {
      setSubjects(response.data)
    })
    promise.catch((error) => {
      console.log(error)
    })
  };

  const handleChangeSubject = (panel) => (event, isExpanded) => {
    setExpandedSubject(isExpanded ? panel : false);
    const promise = api.getTestsBySubject(panel);

    promise.then((response) => {
      setTests(response.data)
    })
    promise.catch((error) => {
      console.log(error)
    })
  };

  return (
    <div>
      {terms.map((term) => (
        <Accordion expanded={expandedTerm === term.id} onChange={handleChangeTerm(term.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >

            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {term.number}
            </Typography>

          </AccordionSummary>

          <AccordionDetails>
            {subjects.map((subject)=> (
//------------------------------------------------------------
                <Accordion expanded={expandedSubject === subject.id+term.id} onChange={handleChangeSubject(subject.id+term.id)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >

                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      {subject.name}
                    </Typography>

                  </AccordionSummary>

                  <AccordionDetails>
                    {tests.map((test)=> (

                      

                      <Typography>
                        {test.name}
                      </Typography>

                    ))}
                  </AccordionDetails>

                </Accordion>
//-------------------------------------------------------

            ))}
          </AccordionDetails>

        </Accordion>)
      )}
      
    </div>
  );
}
