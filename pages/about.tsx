import React, { Fragment } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

import AboutMeInfo from '@/components/about/Info';
import Navbar from '@/components/shared/navbar/Navbar';

const AboutWorkflow = dynamic(import('@/components/about/Workflow'));
const Footer = dynamic(import('@/components/shared/footer'));

const About = () => {
  return (
        <Fragment>
            <Head>
                <title>About</title>
                <meta name="description" content="About page"/>
            </Head>
            <Box className='min-h-screen'>
                <Navbar/>
                <AboutMeInfo/>
                <AboutWorkflow/>
            </Box>
            <Footer/>
        </Fragment>
  );
};

export default About;