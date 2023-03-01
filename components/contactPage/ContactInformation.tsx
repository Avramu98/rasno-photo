import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

import { contactInformations } from '@/lib/contants/contactPageConstants';
import ContactColumn from '@/components/contactPage/ContactColumn';
import Socials from '@/components/shared/socials';
import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';

const ContactInformation = () => {
  return (
            <Container maxWidth='lg'>
                <Box className='container'>

                {/*-------HEADER----*/}
                <AnimatedHeader moreStyles='pt-10' text='Hai să stăm de vorbă!'/>
               <AnimatedSubheader text='Povestește-mi despre viziunea ta și obiectivele tale, pot fi un partener de încredere în
                    realizarea acestora prin intermediul fotografiei.'/>
             

                {/*------CONTACT DATA-----*/}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0 },
                    }}>
                    <Container
                        maxWidth='md'
                        className='mb-5 flex flex-col lg:flex-row justify-between gap-6 lg:gap-0'>
                        {contactInformations.map((contact) =>
                            <ContactColumn key={contact.id} {...contact}/>,
                        )}
                    </Container>
                </motion.div>

                <Socials/>
                </Box>
            </Container>
  );
};

export default ContactInformation;