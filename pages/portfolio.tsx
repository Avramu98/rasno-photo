import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

import Navbar from '@/components/shared/navbar/Navbar';
import Intro from '@/components/portfolio/Intro';
import Gallery from '@/components/portfolio/Gallery';

const Footer = dynamic(import('@/components/shared/footer'));

const Portfolio = () => {

  return (
        <div className='text-white'>
            <Head>
                <title>Portofoliu</title>
                <meta name="description" content="Portfolio page of RasnoPH"/>
            </Head>
            <Box className='min-h-screen'>
                <Navbar/>
                <Intro/>
                <Gallery/>
            </Box>
            <Footer/>
        </div>
  );
};

export default Portfolio;