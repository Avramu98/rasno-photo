import React from 'react';
import { Typography } from '@mui/material';

import FadeInAnimationWrapper from '@/components/shared/animations/FadeInAnimationWrapper';

const AnimatedSubheader = ({ text, moreStyles }: { text:string, moreStyles?: string }) => {
  return (
        <FadeInAnimationWrapper>
            <Typography className={`subheader ${moreStyles}`}>
                {text}
            </Typography>
        </FadeInAnimationWrapper>
  );
};

export default AnimatedSubheader;