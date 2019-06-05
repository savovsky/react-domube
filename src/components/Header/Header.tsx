import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Box } from '@material-ui/core';

import AppMenu from './AppMenu';
import UserMenu from './UserMenu';


const Header: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between">
          <Box>
            <Grid container justify="flex-start" alignItems="center">
              <AppMenu />
              <Typography variant="h5">domube</Typography>
            </Grid>
          </Box>
          <Box>
            <Grid container justify="flex-end" alignItems="center">
              <UserMenu />
            </Grid>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
  
export default Header;
