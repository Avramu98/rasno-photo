import React from 'react';
import { Box } from '@mui/material';

import { navigationItems } from '@/lib/contants/landingPageContants';
import NavItem from '@/components/navbar/NavItems';

const WebMenu = () => {
  return (
        <Box className='flex w-fit gap-5 pr-10'>
            {navigationItems.map((navItem) => (
                <NavItem key={navItem.name} name={navItem.name} redirectLink={navItem.redirectTo}/>
            ))}
        </Box>
  );
};

export default WebMenu;