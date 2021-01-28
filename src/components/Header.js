import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    height: 90,
    backgroundColor: '#fff !important',
    padding: 10,
    transition: '0.2s !important',
  },
  headerTxt: {
    marginRight: 10,
    fontSize: 20,
    fontWeight: 600,
    color: '#000',
  },
});

const AppHeader = ({ classes }) => {
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.headerTxt}>Recent Cyptocurrency Details</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(withStyles(styles)(AppHeader));
