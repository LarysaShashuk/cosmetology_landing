import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BallotIcon from '@mui/icons-material/Ballot';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import TodayIcon from '@mui/icons-material/Today';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import CustomersBlock from './Blocks/CustomersBlock/CustomersBlock';
import AddCustomerBlock from './Blocks/AddCustomerBlock/AddCustomerBlock';
import ProceduresBlock from './Blocks/ProceduresBlock/ProceduresBlock';
import WishesBlock from './Blocks/WishesBlock/WishesBlock';
import SalesBlock from './Blocks/SalesBlock/SalesBlock';
import CalendarBlock from './Blocks/CalendarBlock/CalendarBlock';
import styles from './AdminPanel.module.scss';

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
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'white',
          padding: '10px 15px',
          minWidth: '30px',
          width: '50px',
          margin: '5px 10px',

          '@media (min-width: 280px) and (max-width: 740px)': {
            padding: '0 5px',
            minWidth: '30px',
            width: '30px',
            minHeight: '35px',
            height: '30px',
            margin: '5px 5px',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          width: '70px',
          paddingTop: '10px',

          '@media (min-width: 280px) and (max-width: 740px)': {
            width: '40px',
          },
        },
        indicator: {
          display: 'none',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '30px',

          '@media (min-width: 280px) and (max-width: 740px)': {
            fontSize: '20px',
          },
        },
      },
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className={styles.tabpanel}
    >
      {value === index && (
        <Box sx={{ p: 3, padding: '5px' }} className={styles.tabpanel__box}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: `${purple[800]}`,
    color: 'white',
    width: 220,
    height: 50,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={TabsCustomeTheme}>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'none', display: 'flex', height: 'auto', minHeight: '100vh' }}
className={styles.box}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            bgcolor: `${purple[800]}`,
          }}
        >
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Клієнти</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <Tab
              icon={<PeopleAltIcon />}
              aria-label="person"
              {...a11yProps(1)}
              classes={{
                selected: styles.selected,
              }}
            />
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Створити клієнта</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <Tab
              icon={<GroupAddIcon />}
              aria-label="person"
              {...a11yProps(2)}
              classes={{
                selected: styles.selected,
              }}
            />
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Послуги</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <Tab
              icon={<FaceRetouchingNaturalIcon />}
              aria-label="phone"
              {...a11yProps(3)}
              classes={{
                selected: styles.selected,
              }}
            />
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Комплекси "Я хочу..."</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <Tab
              icon={<BallotIcon />}
              aria-label="favorite"
              {...a11yProps(4)}
              classes={{
                selected: styles.selected,
              }}
            />
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Акції</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <Tab
              icon={<LoyaltyIcon />}
              aria-label="favorite"
              {...a11yProps(5)}
              classes={{
                selected: styles.selected,
              }}
            />
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Календар</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <Tab
              icon={<TodayIcon />}
              aria-label="favorite"
              {...a11yProps(6)}
              classes={{
                selected: styles.selected,
              }}
            />
          </HtmlTooltip>
        </Tabs>

        <TabPanel value={value} index={0}>
          <CustomersBlock/>
        </TabPanel>
        <TabPanel value={value} index={1}>
         <AddCustomerBlock/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProceduresBlock/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <WishesBlock/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SalesBlock/>
        </TabPanel>
        <TabPanel value={value} index={5}>
         <CalendarBlock/>
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}
