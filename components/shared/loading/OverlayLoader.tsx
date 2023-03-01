import React from 'react';
import { Box } from '@mui/material';
import { Default } from 'react-awesome-spinners';

const OverlayLoader = () => {
  return (
        <Box
            className='absolute top-0 left-0 backdrop-blur-sm bg-black/20 bg-transparent w-full h-full'>
            <div className='grid h-full place-items-center'>
                <Default color='#FB8500'/>
            </div>
        </Box>
  );
};

export default OverlayLoader;