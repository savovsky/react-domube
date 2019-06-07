import { ListItem, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledListItem = withStyles(theme => ({
  root: {
    "& .MuiListItemIcon-root": {
      minWidth: '40px'
    },
    "& .MuiListItemText-root": {
      paddingRight: '5px'
    },
    "&:hover": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.primary.main
      },
    }
  }
}))(ListItem);

export const StyledTabs = withStyles(theme => ({
  root: {
    "& .MuiTab-wrapper": {
      flexDirection: 'row'
    }
  }
}))(Tabs);

export const StyledTab = withStyles(theme => ({
  root: {
    "& .MuiTab-labelIcon, & .MuiTab-wrapper :first-child": {
      marginRight: '5px',
      marginBottom: '2px'
    }
  }
}))(Tab);
