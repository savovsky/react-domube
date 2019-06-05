import React, { useState } from 'react';


const useDrawer = (event?: React.KeyboardEvent | React.MouseEvent) => {

	const [isOpen, setIsOpen] = useState(false);

	if (
		event && event.type === 'keydown' &&
		((event as React.KeyboardEvent).key === 'Tab' ||
			(event as React.KeyboardEvent).key === 'Shift')
	) {
		return;
	}

	setIsOpen(!isOpen);

	return isOpen;
};

export default useDrawer;
