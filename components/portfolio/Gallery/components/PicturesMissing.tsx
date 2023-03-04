import React from 'react';
import { Container, Typography } from '@mui/material';

const PicturesMissing = () => {
  return (
        <Container className='h-40 grid place-items-center' maxWidth='md'>
            <Typography className=' font-prompt text-center italic text-contrast text-2xl md:text-4xl' >Loading</Typography>
        </Container>
  );
};

export default PicturesMissing;