import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const FormBlockCustomeTheme = createTheme({
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
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '10px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: purple[800],
          color: 'white',
          borderRadius: '5px',
          padding: '20px 5px',
          fontSize: '14px',
          marginBottom: '20px',

          '@media (max-width: 780px)': {
            fontSize: '12px',
          },

          '&.Mui-focused': {
            color: 'white',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          fontSize: '14px',
          textTransform: 'none',
          fontWeight: '400',
          border: `1px solid ${purple[800]}`,
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',

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
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '@media (max-width: 740px)': {
            fontSize: '12px',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '@media (max-width: 740px)': {
            fontSize: '12px',
          },
        },
      },
    },
  },
});

export const CheckboxesCustomeTheme = createTheme({
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
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: purple[800],
          color: 'white',
          borderRadius: '5px',
          padding: '12px 10px',
          marginBottom: '10px',
          fontSize: '14px',
          overflowWrap: 'normal',
          height: 'auto',

          '@media (max-width: 780px)': {
            fontSize: '12px',
          },

          '&.Mui-focused': {
            color: 'white',
          },
        },
        label: {
          display: 'flex',
          overflow: 'visible',
          whiteSpace: 'break-spaces',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '14px',

          '@media (min-width: 671px) and (max-width: 780px)': {
            fontSize: '12px',
          },

          '@media (max-width: 670px)': {
            width: '100%',
            fontSize: '12px',
          },
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          paddingLeft: '5px',
          width: '100%',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiCheckbox-root': {
            padding: '7px',

            '@media (max-width: 670px)': {
              padding: '4px',
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'flex-start',

          '@media (min-width: 10px)': {
            margin: '0',
            marginBottom: '15px',
          },
        },
      },
    },
  },
});

export const TableCustomeTheme = createTheme({
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
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '@media (max-width: 930px)': {
            fontSize: '10px',
          },
        },
        head: {
          backgroundColor: purple[800],
          color: 'white',
          fontWeight: '400',

          '@media (max-width: 930px)': {
            fontSize: '10px',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: '#EEEEEE',

          '&:nth-of-type(odd)': {
            backgroundColor: '#E2E1E1',
          },
          // hide last border
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        },
      },
    },
  },
});
