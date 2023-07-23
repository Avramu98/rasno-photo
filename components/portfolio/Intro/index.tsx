import React from 'react';
import { Box, Container } from '@mui/material';

import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';
import AnimatedCta from '@/components/shared/button/AnimatedCta';

const Intro = () => {
  return (
            <Container maxWidth='lg'>
                <Box className='container'>
                    <AnimatedHeader moreStyles='pt-16' text="If you've made it this far, it means I've piqued your curiosity, and you want to see more."/>
                    <AnimatedSubheader text="Let me show you some of my work so far. If you find it interesting and to your liking, you can continue to the next page where you'll get to know me better."/>
                    <AnimatedCta text='About' redirectLink='/about'/>
                </Box>
            </Container>
  );
};
export default Intro;