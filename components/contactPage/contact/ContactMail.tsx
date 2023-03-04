import React from 'react';
import { Box, Container } from '@mui/material';

import ContactForm from '@/components/contactPage/contact/ContactForm';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';

const ContactMail = () => {
  return (
        <Container maxWidth='sm' >
            <Box className='container mb-10 md:py-0 items-center'>
            <AnimatedSubheader text='Poți să îmi trimiți un mail direct din
                formularul de mai jos și putem lua legătură acolo.'/>
            <ContactForm/>
            </Box>
        </Container>
  );
};

export default ContactMail;