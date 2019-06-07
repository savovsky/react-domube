import React from 'react';
import {Hidden } from '@material-ui/core';

import FooterTabs from './FooterTabs';


const Footer: React.FC = () => {
  return (
    <>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <FooterTabs />
      </Hidden>
    </>
  );
}
  
export default Footer;
