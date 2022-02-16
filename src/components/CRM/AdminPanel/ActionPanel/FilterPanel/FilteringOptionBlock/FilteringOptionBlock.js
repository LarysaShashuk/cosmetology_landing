import React from 'react';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          backgroundColor: purple[800],
          color: 'white',
          borderRadius: '5px',
          padding: '10px 20px',
          marginBottom: '10px',
          fontSize: '14px',

          '@media (max-width: 780px)': {
            fontSize: '12px',
          },

          '&.Mui-focused': {
            color: 'white',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          width: '280px',
          fontSize: '14px',

          '@media (min-width: 671px) and (max-width: 780px)': {
            width: '210px',
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
          '@media (min-width: 10px)': {
          margin: '0',
            marginBottom: '15px',
          },
        },
      },
    },
  },
});

export default function FilteringOptionBlock(props) {
  const { title, content } = props;

  return (
    <ThemeProvider theme={TabsCustomeTheme}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">{title}:</FormLabel>
        <FormGroup>
          {content.map((item, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox name={item} />}
              label={item[0].toUpperCase() + item.slice(1)}
            />
          ))}
        </FormGroup>
      </FormControl>
    </ThemeProvider>
  );
}
