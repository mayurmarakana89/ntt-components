import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    width: 1024,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '20%'
  },
  tabPanel: {
    padding: '0 24px',
    width: '80%'
  },
  tabPanelTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#036'
  },
  tabPanelContent: {
    width: '100%'
  }
}));

const VerticalTabs = ({ tabs, page, setPage }) => {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setPage(newValue);
  };
  
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={page !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {page === index && (
          <>
            <Typography className={classes.tabPanelTitle}>{"Vaccination Verification"}</Typography>
            <Box className={classes.tabPanelContent}>
              <Typography>{children}</Typography>
            </Box>
          </>
        )}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={page}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {
          tabs.map((tab, idx) => {
            return <Tab label={tab.label} {...a11yProps(idx)} />
          })
        }
      </Tabs>
      {
        tabs.map((tab, idx) => {
          return (
            <TabPanel
              className={classes.tabPanel}
              value={page}
              index={idx}
            >
              {tab.content}
            </TabPanel>
          );
        })
      }
    </div>
  );
}

export default VerticalTabs;