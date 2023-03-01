import React from 'react';
import { Box, Typography } from '@mui/material';

import HalfRotateAnimationWrapper from '@/components/shared/animations/HalfRotateAnimationWrapper';

import { TestimonialDataI } from '../../../../types/landingPage';

const SingleTestimonial = ({ message, name }: Omit<TestimonialDataI, 'id'>) => {
  return (
      <HalfRotateAnimationWrapper>
        <Box style={{
          backgroundImage: 'url(/static/quotes.png)',
          backgroundPosition: 'top',
          backgroundSize: '30%',
          backgroundRepeat: 'no-repeat',
        }}
             className='bg-white rounded-2xl custom-shadow-lg w-64 md:w-60 p-4 flex flex-col justify-between h-80 '>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Typography className='font-poppins text-black italic text-sm mt-8'>" {message} "</Typography>
            <Box className='flex gap-2 justify-center'>
                <Typography className='font-poppins text-md text-black italic'>- {name}</Typography>
            </Box>
        </Box>
      </HalfRotateAnimationWrapper>
  );
};

export default SingleTestimonial;