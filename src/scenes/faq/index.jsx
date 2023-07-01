import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur consectetur optio corporis fugit blanditiis 
                    enim doloribus possimus iure voluptas neque.
                </Typography>
            </AccordionDetails>
        </Accordion>
   
        <Accordion defaultExpanded>
            <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur consectetur optio corporis fugit blanditiis 
                    enim doloribus possimus iure voluptas neque.
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
            <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Favourite question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur consectetur optio corporis fugit blanditiis 
                    enim doloribus possimus iure voluptas neque.
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
            <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Some Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur consectetur optio corporis fugit blanditiis 
                    enim doloribus possimus iure voluptas neque.
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
            <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    The Final Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur consectetur optio corporis fugit blanditiis 
                    enim doloribus possimus iure voluptas neque.
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>
  )
}

export default FAQ