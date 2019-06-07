import React from 'react';
import { Paper, Icon } from '@material-ui/core';

import { navLinks } from '../../common/navLinks';
import { StyledTabs, StyledTab } from '../styledMuiComponents';



const NavTabs = () => {
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  interface LinkTabProps {
    key?: string;
    label?: string;
    icon?: any; // TODO React.Component
    href?: string;
  }
  
const LinkTab = (props: LinkTabProps) => {
    return (
      <StyledTab
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  return (
    <Paper square>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {navLinks.map((item) => (
          <LinkTab
            key={item.link}
            label={item.link}
            icon={<Icon>{item.icon}</Icon>}
            href="https://angube.com/"
          />
        ))}
      </StyledTabs>
    </Paper>
  );
}

export default NavTabs;
