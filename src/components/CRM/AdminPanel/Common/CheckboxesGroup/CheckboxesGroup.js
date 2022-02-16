import React from 'react';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import styles from './CheckboxesGroup.module.scss';

const CheckboxesCustomeTheme = createTheme({
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
          padding: '20px 10px',
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


export default function CheckboxesGroup(props) {
  const { id: groupID, title: groupTitle, checkboxes, comment, formik } = props;

  return (
    <div className={styles.checkboxesWrapper}>
      <ThemeProvider theme={CheckboxesCustomeTheme}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <Chip label={groupTitle + ':'} />
          <FormGroup>
            {checkboxes.map((item, index) => {
              const { id: itemID, title: itemTitle } = item;
              return (
                <FormControlLabel
                key={index}
                  control={
                    <Checkbox
                    id={itemID}
                      name={itemID}
                      {...formik.getFieldProps(`${groupID.itemID}`)}
                    />
                  }
                  label={itemTitle}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </ThemeProvider>
      {comment ? (
        <TextField
          id={`${groupID}.comment`}
          {...formik.getFieldProps(`${groupID.comment}`)}
          label="Коментар"
          variant="outlined"
          color="primary"
          size="small"
        />
      ) : null}
    </div>
  );
}
