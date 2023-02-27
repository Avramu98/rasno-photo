import React from 'react';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

import { TestimonialItemsI } from '../../../types/landingPage';

const SingleTestimonial = ({ message, name }: Omit<TestimonialItemsI, 'id'>) => {
  return (
        <Box style={{
          backgroundImage: 'url(/static/quotes.png)',
          backgroundPosition: 'top',
          backgroundSize: '30%',
          backgroundRepeat: 'no-repeat',
        }}
             className='bg-white shadow-md w-64 md:w-60 p-4 flex flex-col justify-between h-80 border-2 border-white'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Typography className='font-poppins text-black italic text-sm mt-8'>" {message} "</Typography>
            <Box className='flex gap-2 justify-center'>
                <Typography className='font-poppins text-md text-black italic'>- {name}</Typography>
                <FacebookIcon className='text-blue-600'/>
            </Box>
        </Box>
  );
};

export default SingleTestimonial;