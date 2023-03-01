import { motion } from 'framer-motion';
import React from 'react';

import MenuItemMobile from '@/components/shared/navbar/mobile/MenuItemsMobile';
import { navigationItems } from '@/lib/contants/landingPageContants';
import Logo from '@/components/shared/logo';

const DropDownMobile = () => {
  return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='z-40 w-full absolute top-20 flex flex-col justify-between h-screen '
        >
            <ul className='w-full'>
                {navigationItems.map((navigationItem) => (
                    <MenuItemMobile navigationItem={navigationItem} key={navigationItem.id}/>
                ))}
            </ul>
            <Logo/>

        </motion.div>

  );
};

export default DropDownMobile;