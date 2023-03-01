import React from 'react';
import { Box, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import Mailto from '@/components/mail/MailTo';

import Logo from '../logo';
import Socials from '../socials';

const Footer = () => {

  return (
        <Box className='min-h-fit px-10 py-4 '>
            <Box className='flex flex-col items-center md:flex-row md:justify-between gap-4'>
                {/*------LOGO-----*/}
                <Box className='w-fit sm:mx-auto sm:mb-4 md:m-2'>
                    <Logo/>
                </Box>
                {/*------LOGO-----*/}

                {/*--------CONTACT-----*/}
                <Box className='flex flex-col self-center gap-3'>
                    <Box className='flex place-items-center gap-2'>
                        <LocalPhoneIcon className='text-contrast' fontSize='medium'/>
                        <a href="tel:0734583628">
                            <Typography className='text-contrast font-poppins'>(0734) 583 628</Typography>
                        </a>
                    </Box>
                    <Box className='flex place-items-center gap-2 mb-4'>
                        <AlternateEmailIcon className='text-contrast' fontSize='medium'/>
                        <Mailto email="rrasnoveanu@yahoo.com" subject="Salut," body="Am găsit site-ul tău și ...">
                            <Typography className='text-contrast font-poppins'>rrasnoveanu@yahoo.com</Typography>
                        </Mailto>
                    </Box>
                </Box>
                {/*--------CONTACT-----*/}

            </Box>

            <Socials/>

            <Typography className='font-poppins text-center text-contrast mt-3'>Copyright © 2023 RasnoPhoto. All rights
                reserved. Developed by AVR Solutions</Typography>
        </Box>
  );
};

export default Footer;