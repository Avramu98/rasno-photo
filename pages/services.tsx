import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

import Navbar from '@/components/navbar/Navbar';
import Index from '@/components/shared/footer';
import IntroductionHeader from '@/components/servicesPage/IntroductionHeader';
import ServicePresentation from '@/components/servicesPage/ServicePresentation';

const Services = () => {
  return (
        <div className='text-white'>
            <Head>
                <title>Services</title>
                <meta name="description" content="Services page"/>
            </Head>
            <Box className='min-h-screen'>
                <Navbar/>
                <IntroductionHeader/>
                <ServicePresentation/>
            </Box>
            <Index/>
        </div>
  );
};

export default Services;