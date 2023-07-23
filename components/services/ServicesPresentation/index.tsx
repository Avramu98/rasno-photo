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
                <AnimatedHeader text='Here are some details about the services that I offer.'/>
                <AnimatedSubheader moreStyles='w-fit md:w-1/2' text="Below you can see the areas in which I have perfected my skills. But I won't refuse a challenge!"/>

                {services.map((service) => (
                    <SingleService key={service.id} {...service}/>
                ))}
                </Box>
            </Container>
  );
};

export default ServicesPresentation;