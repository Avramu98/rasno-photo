import React, { RefObject } from 'react';
import Box from '@mui/material/Box';
import  Container from '@mui/material/Container';
import { SwiperSlide } from 'swiper/react';

import { testimonialsData } from '@/lib/contants/landingPageContants';
import SingleTestimonial from '@/components/home/Testimonials/components/SingleTestimonial';
import TestimonialsSwiperWrapper from '@/components/home/Testimonials/components/TestimonialsSwiperWrapper';
import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';

const Testimonials = ({ testimonialRef }: { testimonialRef:RefObject<HTMLElement> }) => {
  return (
        <Box ref={testimonialRef} className='container'>
            <AnimatedHeader moreStyles='pt-6' text='Customer Reviews'/>
            <AnimatedSubheader text='Welcome to my portfolio website. I am thrilled to showcase my work and how I can capture unique moments through my camera. Below, you can find feedback from my previous clients. Browse and get inspired for your next project or special event.'/>

            {/*------TESTIMONIALS CARDS-----*/}
                <Container maxWidth='lg'>
                    <TestimonialsSwiperWrapper>
                        {testimonialsData.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <SingleTestimonial
                                        message={testimonial.message}
                                        name={testimonial.name}/>
                                </SwiperSlide>
                        ))
                        }
                    </TestimonialsSwiperWrapper>
                </Container>
            {/*------TESTIMONIALS CARDS-----*/}

        </Box>

  );
};

export default Testimonials;