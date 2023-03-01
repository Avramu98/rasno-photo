import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import Navbar from '@/components/shared/navbar/Navbar';
import Intro from '@/components/portfolio/Intro';
import Gallery from '@/components/portfolio/Gallery';
import { getPictures } from '@/lib/prisma/pictures';

import { PictureData } from '../types/misc';

const Footer = dynamic(import('@/components/shared/footer'));


export async function getStaticProps() {
  const { picturesData } = await getPictures();

  return {
    props: { picturesData },
  };
}

const Portfolio = ({ picturesData }: { picturesData: PictureData }) => {
  const router = useRouter();
  const { pickedCategoryFromLandingPage } = router.query;
  return (
        <div className='text-white'>
            <Head>
                <title>Portofoliu</title>
                <meta name="description" content="Portfolio page of RasnoPH"/>
            </Head>
            <Box className='min-h-screen'>
                <Navbar/>
                <Intro/>
                <Gallery pickedCategoryFromLandingPage={pickedCategoryFromLandingPage}
                                picturesData={picturesData}/>
            </Box>
            <Footer/>
        </div>
  );
};

export default Portfolio;