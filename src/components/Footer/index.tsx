import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Hidden, BottomNavigation, BottomNavigationAction, Icon, Box, Divider } from '@material-ui/core';

import { footerLinks } from '../../common/footerLinks';


const useStyles = makeStyles(() =>
  createStyles({
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0
    }
  }),
);

const Footer: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  return (
    <>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <Box className={classes.stickToBottom}>
          <Divider />
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            {footerLinks.map((item) => (
              <BottomNavigationAction key={item.link} label={item.link} icon={<Icon>{item.icon}</Icon>} />
            ))}
          </BottomNavigation>
        </Box>
        );
      </Hidden>
    </>
  );
}

export default Footer;
