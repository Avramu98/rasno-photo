import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';

const Introduction = () => {
  return (
        <Box className='py-20 bg-white flex-col'>
            <Container maxWidth='lg'>
                <DropAnimationHeaderWrapper>
                    <Typography
                        className='text-2xl md:text-3xl md:text-5xl text-black text-center font-prompt font-bold pt-10'>
                        Dacă ai ajuns până aici înseamnă că te-am făcut curios și vrei să vezi mai multe
                    </Typography>
                </DropAnimationHeaderWrapper>
                <Typography className='text-lg font-prompt text-black text-center font-poppins py-10 px-0 md:px-12'>
                    Haide să îți prezint o parte din munca mea de până acum. Dacă ți se pare interesant și pe placul tău
                    ce fac poți să continui pe pagină următoare unde mă vei cunoaște și pe mine mai bine.
                </Typography>
                <Box className='flex justify-center pt-5'>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button variant='outlined' className='font-prompt text-lg font-bold text-black'>
                            <Link href={'/about'}>
                                Despre
                            </Link>
                        </Button>
                    </motion.div>

                </Box>
            </Container>
        </Box>
  );
};
export default Introduction;