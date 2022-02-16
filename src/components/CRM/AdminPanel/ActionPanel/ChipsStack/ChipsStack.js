import React from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from './ChipsStack.module.scss';

const ChipsStackCustomeTheme = createTheme({
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
          padding: '3px 0',
          border: `1px solid ${purple[800]}`,
          borderRadius: '10',
          backgroundColor: 'white',
          height: 'auto',
          margin: '0 5px 5px 0',

          ' &:not(style)+:not(style)': {
            margin: '0 5px 5px 0',
          },

        },
      },
    },
  },
});

export default function ChipsStack(props) {
  const { tagsArr, handleDelete } = props;
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={styles.container}>
    <ThemeProvider theme={ChipsStackCustomeTheme}>
      <Stack direction="row" spacing={1} className={styles.chipsStack}>
        {tagsArr.map((item, index) => {
          return (
            <Chip
              key={index}
              label={item}
              variant="outlined"
              onClick={handleClick}
              onDelete={() => handleDelete(item)}
              color="primary"
            />
          );
        })}
      </Stack>
      </ThemeProvider>
    </div>
  );
}
