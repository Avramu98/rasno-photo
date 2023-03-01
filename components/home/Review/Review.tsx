import Box from '@mui/material/Box';
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

import ButtonAnimationWrapper from '@/components/shared/animations/ButtonAnimationWrapper';

const Review = () => {
  return (
        <Box className='text-center py-16 flex flex-col'>
            <Container className='flex flex-col gap-8 md:gap-14 items-center' maxWidth='md'>
                <Typography className='text-contrast text-4xl font-prompt'>
                    Aici poți să îți spui cuvântul
                </Typography>
                <p className='text-contrast text-lg font-poppins'>
                    Îți mulțumesc pentru alegerea de a colabora cu mine. Sper că ai avut o
                    experiență făină și aș
                    dori să aud mai multe despre cum a fost. Dacă ești mulțumit de serviciile mele, mi-ar face
                    plăcere să primesc un review de la ține. Acest lucru mă ajută să îmi îmbunătatesc serviciile și să
                    ofer o experiență excelentă tuturor clienților mei. Poți lăsă un review pe Facebook. Îți mulțumesc
                    din nou pentru susținere și
                    aștept cu interes să colaborăm din nou.</p>
                <ButtonAnimationWrapper>
                    <Button variant='outlined' className='font-prompt border-contrast text-md font-bold text-contrast'>
                        <Link target='_blank'
                              href={'https://www.facebook.com/profile.php?id=100062974131967&sk=reviews'}>
                            Lasă un review
                        </Link>
                    </Button>
                </ButtonAnimationWrapper>

                <Typography className='text-contrast text-5xl mb-14'>Thank you! :)</Typography>
            </Container>
        </Box>
  );
};

export default Review;