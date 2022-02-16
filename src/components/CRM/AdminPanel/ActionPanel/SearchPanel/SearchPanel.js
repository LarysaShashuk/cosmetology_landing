import React from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import ButtonsBar from '../../Common/ButtonsBar/ButtonsBar';
import styles from './SearchPanel.module.scss';

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
    MuiSelect: {
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
    // Name of the component
    MuiOutlinedInput: {
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
    // Name of the component
    MuiMenuItem: {
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

export default function SearchPanel() {
  const [searchKey, setSearchKey] = React.useState('Прізвище');

  const handleChange = (event) => {
    setSearchKey(event.target.value);
  };

  return (
    <ThemeProvider theme={CustomeMUITheme}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <Box>
            <FormControl sx={{ minWidth: 210 }}>
              <InputLabel id="demo-simple-select-label">
                Ключове поле
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchKey}
                label="Ключове поле"
                onChange={handleChange}
                required
                defaultValue={'Прізвище'}
              >
                <MenuItem sx={{ textAlign: 'start' }} value={'Прізвище'}>
                  Прізвище
                </MenuItem>
                <MenuItem value={"Ім'я"}>Ім'я</MenuItem>
                <MenuItem value={'Номер телефону'}>Номер телефону</MenuItem>
                <MenuItem value={'Електронна пошта'}>Електронна пошта</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div className={styles.searchInput}>
            <FormControl sx={{ minWidth: 210 }}>
              <OutlinedInput
                placeholder={searchKey ? searchKey + '...' : null}
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>

        <div className={styles.rightBlock}>
          <ButtonsBar
            handleSave={() => console.log('find')}
            handleClose={() => console.log('close')}
            saveButtonName="Знайти"
            closeButtonName="Закрити"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
