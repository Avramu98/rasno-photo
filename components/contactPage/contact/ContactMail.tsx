import React from 'react';
import { Container, Typography } from '@mui/material';

import ContactForm from '@/components/contactPage/contact/ContactForm';

const ContactMail = () => {
  return (
        <Container maxWidth='sm' className='mt-20 z-40 flex flex-col items-center'>
            <Typography className='font-prompt text-2xl text-center pb-10'>Poți să îmi trimiți un mail direct din
                formularul de mai jos și putem lua legătură acolo.</Typography>
            <ContactForm/>
        </Container>
  );
};

export default ContactMail;