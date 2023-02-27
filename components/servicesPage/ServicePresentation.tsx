import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import { services } from '@/lib/contants/servicesPageContants';
import Service from '@/components/servicesPage/Service';

const ServicePresentation = () => {
  return (
        <Box>
            <Container maxWidth='xl' className='md:[&>*:nth-child(odd)]:flex-row-reverse'>
                <Typography className='text-4xl text-contrast text-center font-prompt font-bold p-12'>
                    Câteva detalii despre servicii
                </Typography>
                {services.map((service) => (
                    <Service key={service.id} {...service}/>
                ))}
            </Container>
        </Box>
  );
};

export default ServicePresentation;