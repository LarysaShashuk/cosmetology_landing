import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const CustomeMUITheme = createTheme({
  palette: {
    primary: {
      main: purple[800],
      light: purple[700],
      dark: purple[900],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: `${purple[800]}`,

          // '&.Mui-expanded': {
          //   color: 'white',
          //   backgroundColor: `${purple[800]}`,
          // },
        },
        expandIconWrapper: {
          color: 'white',

          // '&.Mui-expanded': {
          //   color: 'white',
          // },
        },
        content: {
          margin: '15px 0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          ':before': {
            backgroundColor: 'white !important',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '40px 50px',
        },
      },
    },
  },
});

export default function AccordionBlock(props) {
  const { title, children } = props;
  return (
    <ThemeProvider theme={CustomeMUITheme}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
}
