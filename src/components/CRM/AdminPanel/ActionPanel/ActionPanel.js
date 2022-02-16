import React from 'react';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ChipsStack from './ChipsStack/ChipsStack.js';
import SearchPanel from './SearchPanel/SearchPanel';
import FilterPanel from './FilterPanel/FilterPanel';
import SortPanel from './SortPanel/SortPanel';
import styles from './ActionPanel.module.scss';

const TagsArr = [
  'Пілінг',
  'Купероз',
  'Пігментація',
  'Dfusnyscnm',
  'Masrf',
  'Пілінг',
  'Купероз',
];

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
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: purple[800],
          color: 'white',
          borderRadius: '5px',
          minHeight: '40px',
          minWidth: '40px',
          height: '40px',
          width: '40px',
          border: `1px solid ${purple[800]}`,
          marginLeft: '10px',

          '&:hover': {
            backgroundColor: 'white',
            color: purple[800],
          },

          '@media  (max-width: 800px)': {
            height: '30px',
            width: '30px',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '@media  (max-width: 800px)': {
            height: '20px',
            width: '20px',
          },
        },
      },
    },
  },
});

const TablePanelContent = (id) => {
  switch (id) {
    case 'search-content':
      return <div className={styles.tabpanel}><SearchPanel/></div>;

    case 'filter-content':
      return <div className={styles.tabpanel}><FilterPanel/></div>;

    case 'sort-content':
      return <div className={styles.tabpanel}><SortPanel/></div>;

    default:
      break;
  }
};

export default function ActionPanel() {
  const [anchorSearchIcon, setAnchorSearchIcon] = React.useState(null);
  const [anchorFilterIcon, setAnchorFilterIcon] = React.useState(null);
  const [anchorSortIcon, setAnchorSortIcon] = React.useState(null);

  const handleClickOnSearchIcon = (event) => {
    setAnchorFilterIcon(null);
    setAnchorSortIcon(null);
    setAnchorSearchIcon(anchorSearchIcon ? null : event.currentTarget);
  };

  const handleClickOnFilterIcon = (event) => {
    setAnchorSearchIcon(null);
    setAnchorSortIcon(null);
    setAnchorFilterIcon(anchorFilterIcon ? null : event.currentTarget);
  };

  const handleClickOnSortIcon = (event) => {
    setAnchorSearchIcon(null);
    setAnchorFilterIcon(null);
    setAnchorSortIcon(anchorSortIcon ? null : event.currentTarget);
  };

  const openSearchIcon = Boolean(anchorSearchIcon);
  const openFilterIcon = Boolean(anchorFilterIcon);
  const openSortIcon = Boolean(anchorSortIcon);

  const id = openSearchIcon
    ? 'search-content'
    : openFilterIcon
      ? 'filter-content'
      : openSortIcon
        ? 'sort-content'
        : undefined;

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <ChipsStack tagsArr={TagsArr} />

        <ThemeProvider theme={TabsCustomeTheme}>
          <Stack direction="row" alignItems="center" spacing={1} className={styles.iconsStack}>
            <IconButton
              aria-label="SearchIcon"
              type="button"
              onClick={handleClickOnSearchIcon}
              className={openSearchIcon ? styles.selected : null}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              aria-label="FilterIcon"
              type="button"
              onClick={handleClickOnFilterIcon}
              className={openFilterIcon ? styles.selected : null}
            >
              <FilterAltIcon />
            </IconButton>
            <IconButton
              aria-label="SortIcon"
              type="button"
              onClick={handleClickOnSortIcon}
              className={openSortIcon ? styles.selected : null}
            >
              <SwapVertIcon />
            </IconButton>
          </Stack>
        </ThemeProvider>
      </div>

      {TablePanelContent(id)}
    </div>
  );
}

