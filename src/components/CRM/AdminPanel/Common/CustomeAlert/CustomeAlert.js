import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple, grey } from '@mui/material/colors';

export const AlertCustomeTheme = createTheme({
  palette: {
    primary: {
      main: purple[800],
      light: purple[700],
      dark: purple[900],
    },
    info: {
      main: grey[900],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          marginBottom: '20px',

          '@media (max-width: 800px)': {
            fontSize: '10px',
          },
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          '@media (max-width: 800px)': {
            fontSize: '12px',
          },
        },
      },
    },
  },
});

export default function CustomeAlert(props) {
  const { title, message, severity } = props;
  return (
    <ThemeProvider theme={AlertCustomeTheme}>
      <Alert severity={severity} >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </ThemeProvider >
  );
}
