import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { navLinks } from '../../common/navLinks';
import Context from './context/drawerContext';
import toggleDrawer from './fixtures/toggleDrawer';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const AppMenuList: React.FC = () => {
  const classes = useStyles();
  const { isOpen, setIsOpen }: any = useContext(Context);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
        <Grid container justify="flex-end" alignItems="center">
          <IconButton color="inherit" aria-label="Menu" onClick={(e) => toggleDrawer(isOpen, setIsOpen, e)}>
            <Icon>arrow_back</Icon>
          </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <div
        className={classes.list}
        role="presentation"
        onClick={(e) => toggleDrawer(isOpen, setIsOpen, e)}
        onKeyDown={(e) => toggleDrawer(isOpen, setIsOpen, e)}
      >
        <List>
          {navLinks.map((item) => (
            <ListItem button key={item.link}>
              <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
              <ListItemText primary={item.link} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default AppMenuList;
