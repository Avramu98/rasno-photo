import React from 'react';
import { Container, Typography } from '@mui/material';

const NoPicture = () => {
  return (
        <Container className='h-40 grid place-items-center' maxWidth='md'>
            <Typography className='border-accent border-b-2 font-prompt text-center italic text-contrast' variant='h2'>Ooops! În curând.</Typography>
        </Container>
  );
};

export default NoPicture;