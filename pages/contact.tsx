import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

import Navbar from '@/components/shared/navbar/Navbar';
import ContactInformation from '@/components/contactPage/ContactInformation';

const ContactMail = dynamic(import('@/components/contactPage/contact/ContactMail'));
const Footer = dynamic(import('@/components/shared/footer'));
const WhatsAppBubble = dynamic(import('@/components/whatsAppBubble/WhatsAppBubble'));

const Contact = () => {
  return (
        <div className='text-white'>
            <Head>
                <title>ContactMail</title>
                <meta name="description" content="ContactMail page"/>
            </Head>
            <Box className='min-h-screen'>
                <Navbar/>
                <ContactInformation/>
                <ContactMail/>
                <WhatsAppBubble/>
            </Box>
            <Footer/>
        </div>
  );
};

export default Contact;