import React from 'react';
import { Box, Container } from '@mui/material';

import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';
import AnimatedCta from '@/components/shared/button/AnimatedCta';

const Intro = () => {
  return (
            <Container maxWidth='lg'>
                <Box className='container'>
                    <AnimatedHeader moreStyles='px-16 pt-16' text='Let me tell you more about the services I offer.'/>
                    <AnimatedSubheader text='I am a passionate photographer, offering a variety of services to capture the most special moments. Whether you are looking for graduation photos, photo sessions, or any other type of photography, I am here to provide you with the best services. Check out my portfolio to see more from each category, and if you feel we are a good fit, we can work together to create lasting memories.'/>
                    <AnimatedCta text='Portfolio' redirectLink='/portfolio'/>
                </Box>
            </Container>
  );
};

export default Intro;