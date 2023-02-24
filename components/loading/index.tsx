import React from 'react';
import { Box } from '@mui/material';
import { Default } from 'react-awesome-spinners';


export const Loading = () => {
  return (
        <Box className='w-screen h-screen backdrop-blur-md grid place-items-center'>
            <Box className='grid gap-8 place-items-center'>
                <div className='w-fit h-fit scale-150 '>
                    <Default color='#FB8500'/>
                </div>
            </Box>
        </Box>
  );
};