import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, green, deepOrange } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import PendingIcon from '@mui/icons-material/Pending';

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
          '&.Mui-expanded': {
            border: '1px solid #AAAAAA',
          },

          borderRadius: '5px',

          '@media (max-width: 740px)': {
            padding: '0 10px',
          },
        },
        content: {
          margin: '15px 0',
          alignItems: 'center',

          '&.Mui-expanded': {
            '@media (max-width: 740px)': {
              margin: '10px 0',
            },
          },

          '@media (max-width: 740px)': {
            margin: '10px 0',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          ':before': {
            backgroundColor: 'white !important',
          },

          marginBottom: '10px',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '40px 50px',

          '@media (min-width: 591px and max-width: 930px)': {
            padding: '20px 30px',
          },

          '@media (max-width: 740px)': {
            padding: '20px',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          marginRight: '15px',
          boxShadow: 'none',
          cursor: 'unset',

          '@media (max-width: 740px)': {
            width: '30px',
            height: '30px',
            minHeight: '30px',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '@media (max-width: 740px)': {
            fontSize: '12px',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '@media (max-width: 740px)': {
            width: '20px',
            height: '20px',
          },
        },
      },
    },
  },
});

export default function AccordionBlock(props) {
  const { title, children, pending, error, success } = props;
  return (
    <ThemeProvider theme={CustomeMUITheme}>
      {success ? (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              border: `1px solid ${green[500]}`,
              '&.Mui-expanded': {
                border: `1px solid ${green[500]}`,
              },
            }}
          >
            <Fab
              size="small"
              aria-label="add"
              sx={{
                backgroundColor: `${green[100]}`,
                ':hover': {
                  backgroundColor: `${green[100]}`,
                },
              }}
            >
              <CheckCircleIcon color="success" />
            </Fab>

            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      ) : null}

      {pending ? (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Fab
              color="action"
              size="small"
              aria-label="add"
              sx={{
                ':hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <PendingIcon color="disabled" />
            </Fab>

            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      ) : null}

      {error ? (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              border: `1px solid ${deepOrange[500]}`,
              '&.Mui-expanded': {
                border: `1px solid ${deepOrange[500]}`,
              },
            }}
          >
            <Fab
              sx={{
                backgroundColor: `${deepOrange[100]}`,
                ':hover': {
                  backgroundColor: `${deepOrange[100]}`,
                },
              }}
              size="small"
              aria-label="add"
            >
              <NewReleasesIcon color="error" />
            </Fab>

            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      ) : null}
    </ThemeProvider>
  );
}
