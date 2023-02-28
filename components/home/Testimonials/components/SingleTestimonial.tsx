import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { TestimonialItemsI } from '../../../../types/landingPage';

const SingleTestimonial = ({ message, name }: Omit<TestimonialItemsI, 'id'>) => {
  return (
      <motion.div
        // initial={{ height: 0 }}
        whileInView={{ scale: [1, 0.6, 0.6, 1, 1], borderRadius: ['20%', '20%', '50%', '50%', '20%'], rotate: [0, 0, 60, 60, 0] }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}

      >
        <Box style={{
          backgroundImage: 'url(/static/quotes.png)',
          backgroundPosition: 'top',
          backgroundSize: '30%',
          backgroundRepeat: 'no-repeat',
        }}
             className='bg-white rounded-2xl shadow-2xl w-64 md:w-60 p-4 flex flex-col justify-between h-80 '>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Typography className='font-poppins text-black italic text-sm mt-8'>" {message} "</Typography>
            <Box className='flex gap-2 justify-center'>
                <Typography className='font-poppins text-md text-black italic'>- {name}</Typography>
            </Box>
        </Box>
      </motion.div>
  );
};

export default SingleTestimonial;