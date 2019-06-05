import React, { useState } from 'react';
import { IconButton, Icon, Drawer } from '@material-ui/core';

import AppMenuList from './AppMenuList';
import Context from './context/drawerContext';


const AppMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event?: React.KeyboardEvent | React.MouseEvent) => {

    if (
      event && event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Menu"
        onClick={(e) => toggleDrawer(e)}
      >
        <Icon>menu</Icon>
      </IconButton>
      <Drawer open={isOpen} onClose={() => toggleDrawer()}>
        <Context.Provider value={{ isOpen, setIsOpen }}>
          <AppMenuList />
        </Context.Provider>
      </Drawer>
    </>
  );
}

export default AppMenu;
