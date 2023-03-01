import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';

const IntroductionHeader = () => {
  return (
        <Box className='py-20 text-center'>
            <Container maxWidth='lg' className=''>
                <DropAnimationHeaderWrapper>
                    <Typography className='text-3xl md:text-5xl text-contrast text-center font-prompt font-bold pt-10'>
                        Hai să-ți spun mai multe despre serviciile pe care le ofer.
                    </Typography>
                </DropAnimationHeaderWrapper>
                <Typography className='font-poppins text-lg text-contrast py-10 px-0 md:px-12'>
                    Sunt un fotograf pasionat si ofer o varietate de servicii pentru a captura cele mai speciale
                    momente. Indiferent daca esti in cautarea unor poze de natura, fotografii stradale sau poze de la un
                    eveniment special, sunt aici pentru a-ti oferi cele mai bune imagini. Verifica portofoliul pentru a
                    vedea mai multe despre fiecare categorie si daca ne potrivim putem lucra impreuna pentru a-ti crea
                    amintiri durabile.
                </Typography>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button variant='outlined' className='font-prompt text-contrast border-contrast font-bold'>

                        <Link href={'/portfolio'}>
                            Portofoliu
                        </Link>
                    </Button>
                </motion.div>

            </Container>
        </Box>

  );
};

export default IntroductionHeader;