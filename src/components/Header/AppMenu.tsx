import React, { useState } from 'react';
import { IconButton, Icon, Drawer } from '@material-ui/core';

import AppMenuList from './AppMenuList';
import Context from './context/drawerContext';
import toggleDrawer from './fixtures/toggleDrawer';


const AppMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Context.Provider value={{ isOpen, setIsOpen }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Menu"
          onClick={(e) => toggleDrawer(isOpen, setIsOpen, e)}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Drawer open={isOpen} onClose={() => toggleDrawer(isOpen, setIsOpen)}>
            <AppMenuList />
        </Drawer>
      </Context.Provider>
    </>
  );
}

export default AppMenu;
