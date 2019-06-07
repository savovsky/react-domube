import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Box, Hidden, Paper } from '@material-ui/core';

import AppMenu from './AppMenu';
import UserMenu from './UserMenu';
import NavTabs from './NavTabs';


const Header: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between">
          <Box>
            <Grid container justify="flex-start" alignItems="center">
              <Hidden only={['sm', 'md', 'lg', 'xl']}>
                <AppMenu />
              </Hidden>
              <Typography variant="h6">domube</Typography>
            </Grid>
          </Box>
          <Box>
            <Grid container justify="flex-end" alignItems="center">
              <UserMenu />
            </Grid>
          </Box>
        </Grid>
      </Toolbar>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <Paper square>
          <Box p={1}>
            <Typography  align="center" color="primary" variant="subtitle1">Address</Typography>
          </Box>
        </Paper>
      </Hidden>
      <Hidden only={'xs'}>
        <NavTabs />
      </Hidden>
    </AppBar>
  );
}
  
export default Header;
