import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, Icon, FormHelperText } from '@material-ui/core';


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

const FooterTabs: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  return (
    <div className={classes.stickToBottom}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Recents" icon={<Icon>person</Icon>} />
      <BottomNavigationAction label="Favorites" icon={<Icon>person</Icon>} />
      <BottomNavigationAction label="Nearby" icon={<Icon>person</Icon>} />
    </BottomNavigation>
    </div >
  );
}

export default FooterTabs;
