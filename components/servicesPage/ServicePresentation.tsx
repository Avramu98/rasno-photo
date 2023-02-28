import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import { services } from '@/lib/contants/servicesPageContants';
import Service from '@/components/servicesPage/Service';
import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';

const ServicePresentation = () => {
  return (
        <Box>
            <Container maxWidth='xl' className='md:[&>*:nth-child(odd)]:flex-row-reverse'>
                <DropAnimationHeaderWrapper>
                <Typography className='header p-1 md:pt-12'>
                    Câteva detalii despre servicii
                </Typography>
                </DropAnimationHeaderWrapper>
                <Typography className='md:w-1/2 m-auto text-center font-poppins text-lg text-contrast py-10 px-0 md:px-12'>
                    Mai jos poți vedea care sunt zonele în care m-am perfecționat. Dar nu voi refuza un challenge!
                </Typography>
                {services.map((service) => (
                    <Service key={service.id} {...service}/>
                ))}
            </Container>
        </Box>
  );
};

export default ServicePresentation;