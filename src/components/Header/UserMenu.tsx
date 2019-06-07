import React, { useState } from 'react';
import { IconButton, Icon, Typography, Menu, ListItemIcon, ListItemText, Hidden } from '@material-ui/core';

import { StyledListItem } from '../styledMuiComponents';
import { userLinks } from '../../common/userLinks';

const UserMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <Hidden only={'xs'}>
        <Typography variant="subtitle1">Address</Typography>
      </Hidden>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="Menu"
        onClick={handleClick}
      >
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {userLinks.map((item) => (
          <StyledListItem button onClick={handleClose} key={item.link}>
            <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
            <ListItemText primary={item.link} />
          </StyledListItem>
        ))}
      </Menu>
    </>
  );
}

export default UserMenu;
