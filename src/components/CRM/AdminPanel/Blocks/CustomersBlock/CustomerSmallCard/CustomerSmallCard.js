import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from './CustomerSmallCard.module.scss';

const CardCustomeTheme = createTheme({
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
          backgroundColor: '#F0EAF4',
          height: 'auto',
          margin: '0 5px 5px 0',

          ' &:not(style)+:not(style)': {
            margin: '0 5px 5px 0',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '7px 15px',
          fontSize: '12px',
          borderRadius: '5px',
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
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'start',
          color: 'black',
        },
        h6: {
          '@media (max-width: 1150px)': {
            fontSize: '18px',
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '0 16px 16px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
  },
});

export default function CustomerSmallCard(props) {
  const { firstName, lastName, fatherName, tags, data, procedure, comment } =
    props;

  const sliceDescription = (text) => {
    return text.length > 200 ? text.slice(0, 200) + '...' : text;
  };

  return (
    <div className={styles.container}>
      <ThemeProvider theme={CardCustomeTheme}>
        <Card className={styles.card}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                classes={{
                  h6: styles.h6,
                }}
              >
                {lastName} {firstName} {fatherName}
              </Typography>
              <Stack className={styles.chipsStack} direction="row" spacing={1}>
                {tags.map((item, index) => (
                  <Chip key={index} label={item.toLowerCase()} />
                ))}
              </Stack>
              <Typography className={styles.contentTitle}>
                Найближчий запис:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.contentText}
                classes={{
                  body2: styles.body2,
                }}
              >
                <span className={styles.contentSubTitle}>Дата:</span> {data}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.contentText}
                classes={{
                  body2: styles.body2,
                }}
              >
                <span className={styles.contentSubTitle}>Процедури:</span>{' '}
                {procedure.map((item) => `${item}, `)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.contentText}
                classes={{
                  body2: styles.body2,
                }}
              >
                <span className={styles.contentSubTitle}>Коментар:</span>{' '}
                {sliceDescription(comment)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="small">
              Детальніше
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
}
