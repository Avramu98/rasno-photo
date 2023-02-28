import React from 'react';
import Head from 'next/head';
import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Navbar from '@/components/navbar/Navbar';
import Index from '@/components/shared/footer';
import AboutMeInfo from '@/components/aboutPage/AboutMeInfo';
import AboutWorkflow from '@/components/aboutPage/AboutWorkflow';

const About = () => {
  return (
        <div className='text-white'>
            <Head>
                <title>About</title>
                <meta name="description" content="About page"/>
            </Head>
            <Box className='min-h-screen'>
                <Navbar/>
                <AboutMeInfo/>
                <AboutWorkflow/>

                <Box className='flex justify-center pt-10'>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button variant='outlined' className='font-prompt border-contrast font-bold text-contrast border-white'>
                            <Link href={'/contact'}>
                                Contact
                            </Link>
                        </Button>
                    </motion.div>

                </Box>
            </Box>
            <Index/>
        </div>
  );
};

export default About;