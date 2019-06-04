import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

import AppMenu from './AppMenu';
import UserMenu from './UserMenu';


const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <AppMenu />
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h5" color="inherit">domube</Typography>
          <UserMenu />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
  
export default Header;
