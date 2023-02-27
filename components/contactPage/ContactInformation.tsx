import React from 'react';
import { Box, Chip, Container, Divider, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';

import { contactInformations } from '@/lib/contants/contactPageConstants';
import ContactColumn from '@/components/contactPage/ContactColumn';
import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';

const ContactInformation = () => {
  return (
        <Box className='py-20 flex-col'>
            <Container maxWidth='lg'>

                {/*-------HEADER----*/}
                <DropAnimationHeaderWrapper>
                    <Typography className='text-3xl md:text-5xl text-contrast text-center font-prompt font-bold pt-10'>
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
                    transition={{ duration: 0.6 }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0 },
                    }}>
                    <Container
                        maxWidth='md'
                        className=' flex flex-col lg:flex-row justify-between gap-6 lg:gap-0'>
                        {contactInformations.map((contact) =>
                            <ContactColumn key={contact.id} {...contact}/>,
                        )}
                    </Container>
                </motion.div>

                {/*------CONTACT DATA-----*/}

                <Divider className='text-accent divider-edit my-5'>
                    <Chip className='text-lg text-black bg-white font-prompt font-bold' label="Socials"/>
                </Divider>

                {/*------SOCIALS----*/}
                <Box className='flex justify-center gap-4 mt-2'>
                    <FacebookIcon className='text-contrast' fontSize='large'/>
                    <InstagramIcon className='text-contrast' fontSize='large'/>
                </Box>
                {/*------SOCIALS----*/}

            </Container>
        </Box>
  );
};

export default ContactInformation;