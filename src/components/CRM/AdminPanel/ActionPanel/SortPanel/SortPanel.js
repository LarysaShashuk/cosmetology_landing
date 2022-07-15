import React from 'react';

import Button from '@mui/material/Button';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import styles from './SortPanel.module.scss';

const TabsCustomeTheme = createTheme({
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
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '14px',
          textTransform: 'none',
          fontWeight: '400',
          maxHeight: '45px',
          border: `1px solid ${purple[800]}`,

          '&:hover': {
            background: 'none',
            color: purple[800],
            border: `1px solid ${purple[800]}`,
          },

          '&:disabled': {
            border: 'none',
          },

          '@media (max-width: 1150px)': {
            padding: '10px 15px',
            fontSize: '12px',
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
  },
});

export default function SortPanel() {

  return (
    <div className={styles.container}>
      <ThemeProvider theme={TabsCustomeTheme}>
        <div className={styles.sortButtonsWrap}>
          <Button variant="contained" endIcon={<SwapVertIcon />}>
            Прізвище
          </Button>
          <Button className={styles.rightButton} variant="contained" endIcon={<SwapVertIcon />}>
            Дата останньої процедури
          </Button>
        </div>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          type="submit"
          className={styles.closeButton}
        //   onClick={() => handleClose()}
        >
          Закрити
        </Button>
      </ThemeProvider>
    </div>
  );
}
