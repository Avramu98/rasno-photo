import React from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { ScrollBtnI } from '../../types/misc';

const ScrollButton = ({ specificScrollRef }: ScrollBtnI) => {

  const handleClick = () => {
    specificScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
        <Box
            className='animate-bounce text-white w-full text-center text-5xl md:text-5xl lg:text-7xl bottom-28 md:bottom-20 absolute z-40'>
            <IconButton className='text-accent' onClick={handleClick}>
                <KeyboardArrowDownIcon style={{ scale: '2' }} fontSize='large'/>
            </IconButton>
        </Box>
  );
};

export default ScrollButton;