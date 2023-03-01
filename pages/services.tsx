import React, { Fragment } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

import Navbar from '@/components/shared/navbar/Navbar';
import Intro from '@/components/services/Intro';

const ServicesPresentation = dynamic(import('@/components/services/ServicesPresentation'));
const Footer = dynamic(import('@/components/shared/footer'));

const Services = () => {
  return (
        <Fragment>
            <Head>
                <title>Services</title>
                <meta name="description" content="Services page"/>
            </Head>
            <Box className='min-h-screen'>
                <Navbar/>
                <Intro/>
                <ServicesPresentation/>
            </Box>
            <Footer/>
        </Fragment>
  );
};

export default Services;