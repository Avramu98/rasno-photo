import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const CustomDivider = () => {
  return (
        <motion.div
            whileHover={{
              scaleX: 1.2,
            }}
            transition={{ duration: 0.5 }}
            className=''

        >
            <Box className='
          w-10
          mx-auto
          bg-divider
          h-0.5
          relative
          z-40
          before:absolute
          before:w-1/2
          before:mx-auto
          before:opacity-70
          before:bg-transparent
          before:h-64
          before:-z-40
          before:bg-gradient-to-t
          before:from-[#ffffff]
          before:to-[cyan]
          before:left-0
          before:top-10
          before:blur-[40px]

          after:absolute
          after:w-1/2
          after:opacity-90
          after:h-10
          after:z-[60]
          after:bg-gradient-to-b
          after:from-[black]
          after:to-[black]
          after:left-0
          after:-top-10
          after:blur-[20px]'
            >
            </Box>
        </motion.div>
  );
};

export default CustomDivider;