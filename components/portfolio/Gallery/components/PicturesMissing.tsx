import React from 'react';
import { Container } from '@mui/material';

import DefaultLoader from '@/components/shared/loading/DefaultLoader';

const PicturesMissing = () => {
  return (
        <Container className='h-40 grid place-items-center' maxWidth='md'>
            <DefaultLoader/>
        </Container>
  );
};

export default PicturesMissing;