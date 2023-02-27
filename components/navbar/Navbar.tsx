import React from 'react';
import { motion, useCycle } from 'framer-motion';
import Image from 'next/legacy/image';
import { Box } from '@mui/material';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { useMobileCheck } from '@/lib/hooks/useMobileCheck';
import MobileMenu from '@/components/navbar/MobileMenu';
import WebMenu from '@/components/navbar/WebMenu';
import DarkModeToggle from '@/components/landingPage/darkModeToggle/DarkModeToggle';

import {
  logoAnimation, navBarAnimation,
} from './animations';

const Navbar = () => {
  const { isPhone } = useMobileCheck();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { theme } = useTheme();
  const handleAnimation = () => {
    if (!isPhone) {
      return 'show';
    } else {
      if (isOpen) {
        return 'open';
      }
      return 'closed';
    }
  };

  return (
        <motion.nav
            variants={!isPhone ? navBarAnimation : undefined}
            initial={!isPhone ? 'hidden' : undefined}
            animate={handleAnimation()}
            className={`w-full
            backdrop-blur-md ${theme === 'dark' ? 'bg-white' : 'bg-black'} bg-opacity-5 z-50
            fixed top-0 h-20 flex justify-between rounded-b-2xl`}>
            <Box className='flex'>
                {/*------LOGO-----*/}
                <motion.div
                variants={logoAnimation}
                initial='hidden'
                animate='show'
                className='relative h-full w-36 '
                 >
                <Link href={'/'}>
                    <Box>
                        <Image alt="pictures"
                               priority={true}
                               objectFit='contain'
                               layout='fill'
                               src={`${theme === 'dark' ? '/static/logo-inverted.png' : '/static/logo.png'}`}/>
                    </Box>
                </Link>
                </motion.div>
                {/*------LOGO-----*/}
                <DarkModeToggle/>
            </Box>


            {/*--------NAV ITEMS------*/}
            {isPhone ?
                <MobileMenu isOpen={isOpen} toggleOpen={toggleOpen}/>
              : <WebMenu/>
            }
            {/*--------NAV ITEMS------*/}
        </motion.nav>
  );
};

export default Navbar;