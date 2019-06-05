
const toggleDrawer = (isOpen: boolean, setIsOpen: any, event?: React.KeyboardEvent | React.MouseEvent) => {

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
