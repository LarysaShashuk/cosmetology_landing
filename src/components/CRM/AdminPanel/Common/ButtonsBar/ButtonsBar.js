import React from 'react';

import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import styles from './ButtonsBar.module.scss';

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
          maxHeight: '45px',
          border: `1px solid ${purple[800]}`,
          boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',

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
          backgroundColor: 'white',
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
    MuiSelect: {
      // Name of the component
      styleOverrides: {
        // Name of the slot
        select: {
          '@media (max-width: 1150px)': {
            height: '20px',
            fontSize: '12px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      // Name of the component
      styleOverrides: {
        // Name of the slot
        input: {
          '@media (max-width: 1150px)': {
            height: '20px',
            fontSize: '12px',
          },
        },
      },
    },
    MuiMenuItem: {
      // Name of the component
      styleOverrides: {
        // Name of the slot
        root: {
          '@media (max-width: 1150px)': {
            fontSize: '14px',
          },
        },
      },
    },
  },
});

export default function ButtonsBar(props) {
  const { handleSave, handleClose, saveButtonName, closeButtonName, disabled} = props;

  return (
    <ThemeProvider theme={CustomeMUITheme}>
      <div className={styles.container}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          type="submit"
          className={styles.leftButton}
          onClick={() => handleSave()}
          disabled={disabled ? disabled : false}
        >
          {saveButtonName}
        </Button>

{  closeButtonName && handleClose  ?       <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => handleClose()}
        >
          {closeButtonName}
        </Button> : null }
      </div>
    </ThemeProvider>
  );
}
