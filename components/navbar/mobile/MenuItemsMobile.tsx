import * as React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavigationItemsI } from '../../../types/landingPage';

const MenuItemMobile = ({ navigationItem }: { navigationItem: NavigationItemsI }) => {
  const router = useRouter();
  const isSameRoute = router.pathname === navigationItem.redirectTo;

  return (
        <motion.li
            className={'w-full h-20 flex z-40 items-center justify-center border-black border-b-2'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="text-placeholder w-full">
                <Link href={navigationItem.redirectTo}>
                    <Box className='border-2 justify-center p-2 flex'>
                        <Typography
                            variant='h4'
                            className={`text-center 
                            ${isSameRoute ? 'border-l-8 border-accent text-accent' : 'border-none text-black'}
                             
                            w-full font-prompt font-bold`}>
                            {navigationItem.name}
                        </Typography>
                    </Box>
                </Link>
            </div>
        </motion.li>
  );
};

export default MenuItemMobile;
