import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { contactInformations } from '@/lib/contants/contactPageConstants';
import ContactColumn from '@/components/contactPage/ContactColumn';
import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';
import Socials from '@/components/shared/socials';

const ContactInformation = () => {
  return (
        <Box className='py-10 flex-col'>
            <Container maxWidth='lg'>

                {/*-------HEADER----*/}
                <DropAnimationHeaderWrapper>
                    <Typography className='header pt-10'>
                        Hai să stăm de vorbă!
                    </Typography>
                </DropAnimationHeaderWrapper>
                <Typography className='text-lg font-prompt text-contrast text-center font-poppins py-10 px-0 md:px-12'>
                    Povestește-mi despre viziunea ta și obiectivele tale, pot fi un partener de încredere în
                    realizarea acestora prin intermediul fotografiei.
                </Typography>
                {/*-------HEADER----*/}

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

            </Container>
        </Box>
  );
};

export default ContactInformation;