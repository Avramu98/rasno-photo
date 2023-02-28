import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';
import { CustomButton } from '@/components/shared/button/CustomButton';

const Introduction = () => {
  return (
        <Box className='py-20 flex-col'>
            <Container maxWidth='lg'>
                <DropAnimationHeaderWrapper>
                    <Typography
                        className='header pt-10'>
                        Dacă ai ajuns până aici înseamnă că te-am făcut curios și vrei să vezi mai multe
                    </Typography>
                </DropAnimationHeaderWrapper>
                <Typography className='text-lg font-prompt text-contrast text-center font-poppins py-10 px-0 md:px-12'>
                    Haide să îți prezint o parte din munca mea de până acum. Dacă ți se pare interesant și pe placul tău
                    ce fac poți să continui pe pagină următoare unde mă vei cunoaște și pe mine mai bine.
                </Typography>
                <Box className='flex justify-center pt-5'>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CustomButton variant='outlined' className='custom-button'>
                            <Link href={'/about'}>
                                Despre
                            </Link>
                        </CustomButton>
                    </motion.div>

                </Box>
            </Container>
        </Box>
  );
};
export default Introduction;