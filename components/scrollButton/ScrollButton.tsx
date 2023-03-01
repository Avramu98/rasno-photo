import React, { RefObject } from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollButton = ({ specificScrollRef }: { specificScrollRef:RefObject<HTMLElement> }) => {

  const handleClick = () => {
    specificScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
        <Box
            className='animate-bounce w-full text-center text-5xl md:text-5xl lg:text-7xl bottom-28 md:bottom-20 absolute z-40'>
            <IconButton aria-label='Scroll down' className='text-accent' onClick={handleClick}>
                <KeyboardArrowDownIcon style={{ scale: '2' }} fontSize='large'/>
            </IconButton>
        </Box>
  );
};

export default ScrollButton;