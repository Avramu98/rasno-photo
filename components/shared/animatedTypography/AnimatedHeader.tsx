import React from 'react';
import { Typography } from '@mui/material';

import DropAnimationHeaderWrapper from '@/components/shared/animations/DropAnimationHeaderWrapper';

const AnimatedHeader = ({ text, moreStyles }: { text:string, moreStyles?: string }) => {
  return (
        <DropAnimationHeaderWrapper>
            <Typography className={`pt-12 header ${moreStyles}`}>
                {text}
            </Typography>
        </DropAnimationHeaderWrapper>
  );
};

export default AnimatedHeader;