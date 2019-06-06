import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Icon,
  List,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import { StyledListItem } from '../styledMuiComponents';
import { navLinks } from '../../common/navLinks';
import Context from './context/drawerContext';
import toggleDrawer from './fixtures/toggleDrawer';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
});

// interface Eho {
//   isOpen: boolean,
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
// };

const AppMenuList: React.FC = () => {
  const classes = useStyles();
  const { isOpen, setIsOpen }: any = useContext(Context);
  // TODO create inteface for 'any'

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
        <Grid container justify="flex-end" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={(e) => toggleDrawer(isOpen, setIsOpen, e)}
          >
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
            <StyledListItem button key={item.link}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.link} />
            </StyledListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default AppMenuList;
