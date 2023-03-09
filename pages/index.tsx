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
                      content="Bine ați venit pe Rasno Photography! Sunt un fotograf talentat specializat în capturarea de imagini uimitoare într-o varietate de stiluri, incluzând Eveniment, Sessions, Natura, Street . Pasiunea mea pentru fotografie strălucește prin fiecare cadru pe care îl fac, și ma strădui să captez frumusețea și emoțiile din fiecare moment. Navigați prin portofoliul meu pentru a vedea munca mea și nu ezita sa faci o rezervare pentru o ședință foto"/>
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