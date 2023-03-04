import React, { RefObject } from 'react';
import { Box, Container } from '@mui/material';
import { SwiperSlide } from 'swiper/react';

import { testimonialsData } from '@/lib/contants/landingPageContants';
import SingleTestimonial from '@/components/home/Testimonials/components/SingleTestimonial';
import TestimonialsSwiperWrapper from '@/components/home/Testimonials/components/TestimonialsSwiperWrapper';
import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';

const Testimonials = ({ testimonialRef }: { testimonialRef:RefObject<HTMLElement> }) => {
  return (
        <Box ref={testimonialRef} className='container'>
            <AnimatedHeader moreStyles='pt-6' text='Părerile unor clienți'/>
            <AnimatedSubheader text='Bine ai venit pe site-ul meu de portofoliu. Sunt fericit să-ți arăt munca mea și cum pot captura momentele unice prin intermediul aparatului meu foto. Mai jos poți vedea feedback-ul clienților anteriori. Navighează și inspiră-te pentru următorul tău proiect sau eveniment special.'/>

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