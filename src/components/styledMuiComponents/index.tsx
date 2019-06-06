import { ListItem } from '@material-ui/core';
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
