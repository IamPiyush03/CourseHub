import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SyllabusItem = ({ week, topic, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">Week {week}: {topic}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SyllabusItem;
