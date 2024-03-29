import React from 'react';
import { Box, Chip, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/legacy/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useTheme } from 'next-themes';

import Mailto from '@/components/shared/mail/MailTo';


const Footer = () => {
  const { theme } = useTheme();

  return (
        <Box className='min-h-fit px-10 pb-4'>
            <Box className='flex flex-col items-center md:flex-row md:justify-between'>
                {/*------LOGO-----*/}
                <Box className='w-fit sm:mx-auto sm:mb-4 md:m-2'>
                    <Box className='relative mt-5 h-20 w-36'>
                        <Link href={'/'}>
                            <Box>
                                <Image alt="pictures"
                                       priority={true}
                                       objectFit='contain'
                                       layout='fill'
                                       src={`${theme === 'light' ? '/static/logo.png' : '/static/logo-inverted.png'}`}/>
                            </Box>
                        </Link>
                    </Box>
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
                        <Mailto email="razvan_risnoveanu@yahoo.com" subject="Salut," body="Am găsit site-ul tău și ...">
                            <Typography className='text-contrast font-poppins'>razvan_risnoveanu@yahoo.com</Typography>
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

export default Footer;