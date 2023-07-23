import React, { Fragment, useRef } from 'react';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';

import Navbar from '@/components/shared/navbar/Navbar';
import ScrollButton from '@/components/home/CategoryPresentation/components/ScrollButton';
import CategoryPresentation from '@/components/home/CategoryPresentation';

const Testimonials = dynamic(import('@/components/home/Testimonials'));
const Review = dynamic(import('@/components/home/Review'));
const Footer = dynamic(import('@/components/shared/footer'));

const MainPage = () => {
  const testimonialRef = useRef<HTMLElement>(null);

  return (  
        <Fragment>
            <Head>
                <title>Rasno Photograpghy</title>
                <meta name="description"
                      content="Welcome to Rasno Photography! I am a talented photographer specialized in capturing stunning images in a variety of styles, including Events, Sessions, Nature, and Street photography. My passion for photography shines through every frame I capture, and I strive to capture the beauty and emotions of each moment. Feel free to explore my portfolio to see my work, and don't hesitate to make a booking for a photo session."/>
            </Head>
            {/*-----Landing Part-----*/}
            <Box className='h-screen relative'>
                <Navbar/>
                <ScrollButton specificScrollRef={testimonialRef}/>
                <CategoryPresentation/>
            </Box>
            {/*-----Landing Part-----*/}

            <Testimonials testimonialRef={testimonialRef}/>
            <Review/>
            <Footer/>
        </Fragment>
  );
};

export default MainPage;