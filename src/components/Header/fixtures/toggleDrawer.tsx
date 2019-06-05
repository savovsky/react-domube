import React from 'react';

const toggleDrawer = (
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  event?: React.KeyboardEvent | React.MouseEvent
) => {

  if (
    event && event.type === 'keydown' &&
    ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
  ) {
    return;
  }

  setIsOpen(!isOpen);
};

export default toggleDrawer;
