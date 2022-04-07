import { createTheme } from '@mui/material/styles';
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
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '14px',
          textTransform: 'none',
          fontWeight: '400',
          border: `1px solid ${purple[800]}`,
          '&:hover': {
            background: 'none',
            color: purple[800],
            border: `1px solid ${purple[800]}`,
          },
          '&:disabled': {
            border: 'none',
          },
          '@media (min-width: 740px) and (max-width: 1150px)': {
            padding: '10px 15px',
            fontSize: '12px',
          },
          '@media (min-width: 280px) and (max-width: 740px)': {
            padding: '10px 13px',
            fontSize: '10px',
          },
        },
        outlined: {
          border: `1px solid ${purple[800]}`,
          '&:hover': {
            background: `${purple[800]}`,
            color: 'white',
          },
          '&:disabled': {
            border: 'none',
          },
        },
      },
    },
        MuiAlert: {
    styleOverrides: {
        root: {
          marginBottom: '20px'
        },
      },
    }
  },
});

export default CustomeMUITheme;
