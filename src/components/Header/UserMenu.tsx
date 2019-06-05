import React from 'react';
import { IconButton, Icon, Typography } from '@material-ui/core';

const UserMenu: React.FC = () => {
	return (
		<>
			<Typography variant="subtitle1">User</Typography>
			<IconButton
				edge="end"
				color="inherit"
				aria-label="Menu"
			>
				<Icon>more_vert</Icon>
			</IconButton>
		</>
	);
}

export default UserMenu;
