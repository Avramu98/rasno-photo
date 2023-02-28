import React, { useEffect, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Box } from '@mui/material';
import { useTheme } from 'next-themes';

import { useMobileCheck } from '@/lib/hooks/useMobileCheck';
import MobileMenu from '@/components/navbar/MobileMenu';
import WebMenu from '@/components/navbar/WebMenu';
import DarkModeToggle from '@/components/landingPage/darkModeToggle/DarkModeToggle';

import Logo from '../shared/logo';

import {
  logoAnimation, navBarAnimation,
} from './animations';

const Navbar = () => {
  const { isPhone } = useMobileCheck();
  const [isOpen, toggleOpen] = useCycle(false, true);

  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className='w-full h-20 bg-opacity-5 z-50
            fixed top-0 h-20 flex justify-between rounded-b-2xl'/>;
  }
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
            backdrop-blur-lg ${theme === 'dark' ? 'bg-black' : 'bg-[#F8F8FF]'} 
            bg-opacity-10 z-50
            fixed top-0 h-20 flex justify-between rounded-b-2xl`}>
            <Box className='flex'>
                {/*------LOGO-----*/}
                <motion.div
                variants={logoAnimation}
                initial='hidden'
                animate='show'
                 >
                <Logo/>
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