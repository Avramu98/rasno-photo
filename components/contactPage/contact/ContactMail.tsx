import React from 'react';
import { Box, Container } from '@mui/material';

import ContactForm from '@/components/contactPage/contact/ContactForm';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';

const ContactMail = () => {
  return (
        <Container maxWidth='sm' >
            <Box className='container mb-10 md:py-0 items-center'>
            <AnimatedSubheader text='You can send me an email directly from the form below, and we can get in touch there.'/>
            <ContactForm/>
            </Box>
        </Container>
  );
};

export default ContactMail;