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
                    <AnimatedHeader text='Aici poți să îți spui cuvântul'/>
                    <AnimatedSubheader text='Mulțumesc că ai ales să colaborăm împreună și sper că a decurs totul așa cum te așteptai. Dacă ești mulțumit sau mulțumită de serviciile mele și nu este prea mare deranjul, poți să îmi lași un review pe Facebook apăsând pe butonul de mai jos,  pentru a mă ajuta să îmi îmbunătățesc serviciile și să îmi mențin clienții fericiți. Mulțumesc din nou că ai apelat la serviciile mele și ai avut încredere!'/>
                    <AnimatedCta text='Lasă un review' redirectLink='https://www.facebook.com/profile.php?id=100062974131967&sk=reviews'/>
                <Typography className='header py-16'>Thank you! :)</Typography>
                </Box>
            </Container>
  );
};

export default Review;