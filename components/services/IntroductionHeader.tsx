import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

import DropAnimationHeaderWrapper from '@/components/shared/animations/DropAnimationHeaderWrapper';

const IntroductionHeader = () => {
  return (
        <Box className='py-20 text-center'>
            <Container maxWidth='lg' className=''>
                <DropAnimationHeaderWrapper>
                    <Typography className='text-3xl md:text-5xl text-contrast text-center font-prompt font-bold pt-10'>
                        Let me tell you more about the services I offer.
                    </Typography>
                </DropAnimationHeaderWrapper>
                <Typography className='font-poppins text-lg text-contrast py-10 px-0 md:px-12'>
                    I am a passionate photographer offering a variety of services to capture the most special moments. Whether you are looking for nature shots, street photography, or photos from a special event, I am here to provide you with the best images. Check out my portfolio to see more from each category, and if we are a good fit, we can work together to create lasting memories.
                </Typography>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button variant='outlined' className='font-prompt text-contrast border-contrast font-bold'>

                        <Link href={'/portfolio'}>
                            Portfolio
                        </Link>
                    </Button>
                </motion.div>

            </Container>
        </Box>

  );
};

export default IntroductionHeader;