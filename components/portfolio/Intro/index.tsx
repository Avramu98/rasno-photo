import React from 'react';
import { Box, Container } from '@mui/material';

import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';
import AnimatedCta from '@/components/shared/button/AnimatedCta';

const Intro = () => {
  return (
            <Container maxWidth='lg'>
                <Box className='container'>
                    <AnimatedHeader moreStyles='pt-16' text='Dacă ai ajuns până aici înseamnă că te-am făcut curios și vrei să vezi mai multe'/>
                    <AnimatedSubheader text='Haide să îți prezint o parte din munca mea de până acum. Dacă ți se pare interesant și pe placul tău
                     ce fac poți să continui pe pagină următoare unde mă vei cunoaște și pe mine mai bine.'/>
                    <AnimatedCta text='Despre' redirectLink='/about'/>
                </Box>
            </Container>
  );
};
export default Intro;