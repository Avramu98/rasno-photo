import React from 'react';
import { Box, Container } from '@mui/material';

import { services } from '@/lib/contants/servicesPageContants';
import SingleService from '@/components/services/ServicesPresentation/components/SingleService';
import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';

const ServicesPresentation = () => {
  return (
            <Container maxWidth='xl'>
                <Box className='container'>
                <AnimatedHeader text='Câteva detalii despre servicii'/>
                <AnimatedSubheader moreStyles='w-fit md:w-1/2' text='Mai jos poți vedea care sunt zonele în care m-am perfecționat. Dar nu voi refuza un challenge!'/>

                {services.map((service) => (
                    <SingleService key={service.id} {...service}/>
                ))}
                </Box>
            </Container>
  );
};

export default ServicesPresentation;