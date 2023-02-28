import React from 'react';
import { Box, Chip, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import Mailto from '@/components/mail/MailTo';

import Logo from '../logo';

const Index = () => {

  return (
        <Box className='min-h-fit px-10 pb-4'>
            <Box className='flex flex-col items-center md:flex-row md:justify-between'>
                {/*------LOGO-----*/}
                <Box className='w-fit sm:mx-auto sm:mb-4 md:m-2'>
                    <Logo/>
                </Box>
                {/*------LOGO-----*/}

                {/*--------CONTACT-----*/}
                <Box className='flex flex-col self-center gap-3 m-10'>
                    <Box className='flex place-items-center gap-2'>
                        <LocalPhoneIcon className='text-contrast' fontSize='medium'/>
                        <a href="tel:0734583628">
                            <Typography className='text-contrast font-poppins'>(0734) 583 628</Typography>
                        </a>
                    </Box>
                    <Box className='flex place-items-center gap-2'>
                        <AlternateEmailIcon className='text-contrast' fontSize='medium'/>
                        <Mailto email="rrasnoveanu@yahoo.com" subject="Salut," body="Am găsit site-ul tău și ...">
                            <Typography className='text-contrast font-poppins'>rrasnoveanu@yahoo.com</Typography>
                        </Mailto>
                    </Box>
                </Box>
                {/*--------CONTACT-----*/}

            </Box>

            <Divider className='text-contrast divider-edit'>
                <Chip className='text-lg bg-white text-black font-prompt font-bold' label="Socials"/>
            </Divider>

            {/*------SOCIALS-----*/}
            <Box className='flex justify-center gap-4 mt-2'>
                <Link target='_blank' href='https://www.facebook.com/profile.php?id=100062974131967'>
                    <FacebookIcon className='text-contrast' fontSize='large'/>
                </Link>
                <Link target='_blank' href='https://www.instagram.com/rasno_ph/'>
                    <InstagramIcon className='text-contrast' fontSize='large'/>
                </Link>
            </Box>
            {/*------SOCIALS-----*/}

            <Typography className='font-poppins text-center text-contrast mt-3'>Copyright © 2023 RasnoPh. All rights
                reserved</Typography>
        </Box>
  );
};

export default Index;