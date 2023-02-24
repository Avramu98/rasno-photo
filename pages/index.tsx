import React, { useRef } from 'react';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

import Navbar from '@/components/navbar/Navbar';
import CategoryPresentation from '@/components/landingPage/categoryPresentation/CategoryPresentation';
import ScrollButton from '@/components/scrollButton/ScrollButton';

const Testimonials = dynamic(import('@/components/landingPage/testimonials/Testimonials'));
const Review = dynamic(import('@/components/landingPage/review/Review'));
const Footer = dynamic(import('@/components/footer/Footer'));

const MainPage = () => {
  const testimonialRef = useRef<HTMLElement>(null);

  return (
        <div className='text-white flex flex-col '>
            <Head>
                <title>Rasno Photograpghy</title>
                <meta name="description"
                      content="Bine ați venit pe Rasno Photography! Sunt un fotograf talentat specializat în capturarea de imagini uimitoare într-o varietate de stiluri, incluzând Eveniment, Sessions, Natura, Street . Pasiunea mea pentru fotografie strălucește prin fiecare cadru pe care îl fac, și ma strădui să captez frumusețea și emoțiile din fiecare moment. Navigați prin portofoliul meu pentru a vedea munca mea și nu ezita sa faci o rezervare pentru o ședință foto"/>
            </Head>
            <Box className='h-screen relative'>
                <Navbar/>
                <ScrollButton specificScrollRef={testimonialRef}/>
                <CategoryPresentation/>
            </Box>
            <Testimonials testimonialRef={testimonialRef}/>
            <Review/>
            <Footer/>
        </div>
  );
};

export default MainPage;