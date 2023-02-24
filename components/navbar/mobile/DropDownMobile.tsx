import { motion } from 'framer-motion';
import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/legacy/image';

import MenuItemMobile from '@/components/navbar/mobile/MenuItemsMobile';
import { navigationItems } from '@/lib/contants/landingPageContants';

const DropDownMobile = () => {
  return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className='z-40 w-full absolute top-20 flex flex-col justify-center items-center'
        >
            <ul className='w-full'>
                {navigationItems.map((navigationItem) => (
                    <MenuItemMobile navigationItem={navigationItem} key={navigationItem.id}/>
                ))}
            </ul>
            <Box className='relative mt-5 h-20 w-36'>
                <Link href={'/'}>
                    <Box>
                        <Image alt="pictures"
                               priority={true}
                               objectFit='contain'
                               layout='fill'
                               src='/static/logo.webp'/>
                    </Box>
                </Link>
            </Box>

        </motion.div>

  );
};

export default DropDownMobile;