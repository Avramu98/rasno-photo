import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';

import { testimonialItems } from '@/lib/contants/landingPageContants';
import SingleTestimonial from '@/components/home/Testimonials/components/SingleTestimonial';
import SwiperWrapper from '@/components/home/Testimonials/components/SwiperWrapper';

const Testimonials = ({ testimonialRef }: any) => {
  return (
        <Box ref={testimonialRef} className='text-center py-14 flex flex-col gap-14 '>
            <Typography className='text-contrast text-4xl font-prompt'>Părerile unor clienți</Typography>
            <p className='text-contrast text-lg font-poppins max-w-5xl mx-auto p-5'>
                Bine ai venit pe site-ul meu de portofoliu. Sunt fericit să-ți arăt munca mea și cum pot captura
                momentele unice prin intermediul aparatului meu foto. În această secțiune, vei găși feedback-ul
                clienților mei care au fost încântați de serviciile mele. Navighează și inspiră-te pentru următorul
                tău proiect sau eveniment special.
            </p>
            <Box>
                <Container maxWidth='lg'>
                    <SwiperWrapper>
                        {testimonialItems.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <SingleTestimonial
                                        message={testimonial.message}
                                        name={testimonial.name}/>
                                </SwiperSlide>
                        ))
                        }
                    </SwiperWrapper>
                </Container>
            </Box>
        </Box>

  );
};

export default Testimonials;