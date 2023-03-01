import React from 'react';
import { Typography } from '@mui/material';

import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';

const AnimatedHeader = ({ text, moreStyles }: { text:string, moreStyles?: string }) => {
  return (
        <DropAnimationHeaderWrapper>
            <Typography className={`header ${moreStyles}`}>
                {text}
            </Typography>
        </DropAnimationHeaderWrapper>
  );
};

export default AnimatedHeader;