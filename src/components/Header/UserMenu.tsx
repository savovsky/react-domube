import React from 'react';
import { IconButton, Icon } from '@material-ui/core';

const UserMenu: React.FC = () => {
	return (
		<>
			<IconButton edge="end" color="inherit" aria-label="Menu">
				<Icon>more_vert</Icon>
			</IconButton>
		</>
	);
}

export default UserMenu;
