import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table1 from './table1';
import {Box} from '@mui/material'

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion backgroundColor="red" color="red">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>EXECUTIVES</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Guild President  </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Vice Guild President  </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Prime Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Vice Prime Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CABINET MINISTERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion backgroundColor="red" color="red">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel3a-header"
        >
          <Typography>STATE MINISTERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Minister </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Minister</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel4a-header"
        >
          <Typography>LEGISLATORS</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Lagislator </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Lagislator </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Lagislator </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>
         
          <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px"> Lagislator </Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
       
         </Box>

         <Box display="flex" justifyContent="space-between" margin="5px" alignItems="center" backgroundColor="lightgray" padding="5px">
         <Typography marginLeft="5px">Lagislator</Typography>
         <Typography>Annnnnn Mmmmmmmmm </Typography>
         
         </Box>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
