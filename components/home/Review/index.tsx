import Box from '@mui/material/Box';
import React from 'react';
import { Container, Typography } from '@mui/material';

import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';
import AnimatedCta from '@/components/shared/button/AnimatedCta';

const Review = () => {
  return (
            <Container maxWidth='md'>
                <Box className='container'>
                    <AnimatedHeader text='Here you can have your say'/>
                    <AnimatedSubheader text="Thank you for choosing to collaborate with me, and I hope everything met your expectations. If you are satisfied with my services and wouldn't mind, you can leave a review on Facebook by clicking the button below to help me improve my services and keep my clients happy. Thanks again for using my services and for your trust!"/>
                    <AnimatedCta text='Leave a review' redirectLink='https://www.facebook.com/profile.php?id=100062974131967&sk=reviews'/>
                <Typography className='header py-16'>Thank you! :)</Typography>
                </Box>
            </Container>
  );
};

export default Review;