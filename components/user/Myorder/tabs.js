import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography 
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3} >{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Buy" {...a11yProps(0)} />
          <Tab label="Sell" {...a11yProps(1)} />
          <Tab label="My payments" {...a11yProps(3)} />
        </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
        <Tab label="Date"  />
          <Tab label="Vendeuse" />
          <Tab label="Article"  />
          <Tab label="Prix" />
          <Tab label="Progression"  />
          <Tab label="Détails" />

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Tab label="Date"  />
          <Tab label="Acheteuse" />
          <Tab label="Article"  />
          <Tab label="Votre versement" />
          <Tab label="N° livraison"  />
          <Tab label="Progression"  />
          <Tab label="Détails" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Tab label="Date"  />
          <Tab label="ID Commande" />
          <Tab label="Article"  />
          <Tab label="Gain" />
          <Tab label="Virement"  />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}