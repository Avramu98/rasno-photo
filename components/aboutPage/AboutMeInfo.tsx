import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/legacy/image';

import { cameraDetails } from '@/lib/contants/aboutPageConstants';
import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';
import { useMobileCheck } from '@/lib/hooks/useMobileCheck';

import SidesAnimationWrapper from '../animations/SidesAnimationWrapper';
import { SideType } from '../../types/misc';

const AboutMeInfo = () => {
  const { isPhone } = useMobileCheck();
  return (
        <Box className='py-20 text-center '>
            <Container maxWidth='lg'>
                <Box className='flex flex-col items-center'>
                    <DropAnimationHeaderWrapper>
                        <Typography className='header pt-10'>
                            Hai să-ți spun mai multe despre mine.
                        </Typography>
                    </DropAnimationHeaderWrapper>

                    <SidesAnimationWrapper side={SideType.LEFT}>
                        <Box style={{ overflow: 'hidden' }} className='relative mt-14 h-80 w-80 md:mt-20 md:h-96 md:w-96 shadow-2xl shadow-cyan-500/50 rounded-2xl'>
                            <Image
                                alt="pictures"
                                   priority={true}
                                   objectFit='contain'
                                   layout='fill'
                                   src='/static/profile-rasno.webp'/>
                        </Box>
                    </SidesAnimationWrapper>

                    <Typography className='font-poppins text-lg text-contrast py-10 px-0 md:px-12'>
                        Sunt Râșno, un fotograf care urmează studiile Digital Media la FSPAC. Am 5 ani de experiență în
                        capturarea momentelor unice prin intermediul obiectivelor mele, specializându-mă în poze de
                        party, natură, street photography si sessions. Dar in general ma pot adapta la orice. Talentat
                        și
                        dedicat, promit să capturez emoțiile
                        tale prin
                        intermediul fotografiilor mele.
                    </Typography>
                </Box>

                {/*------CAMERA DETAILS-----*/}
                <Box className='flex flex-col md:flex-row md: justify-center items-center '>
                    <Box className='md:w-1/2 flex justify-center'>
                        <SidesAnimationWrapper side={SideType.LEFT}>
                            <Box className='relative h-80 w-80 md:h-96 md:w-96'>
                                <Image
                                    style={{ border:'1px solid red' }}
                                    alt="pictures"
                                       priority={true}
                                       objectFit='contain'
                                       layout='fill'
                                       src='/static/camera.png'/>
                            </Box>
                        </SidesAnimationWrapper>
                    </Box>
                    <Box className={`md:w-1/2 text-left flex flex-col gap-2 ${isPhone ? 'overflow-auto' : ''}`}>
                        {cameraDetails.map((detail) => (
                            <SidesAnimationWrapper key={detail} side={SideType.RIGHT}>
                                <Typography className='font-poppins text-contrast'>🔶 {detail}</Typography>
                            </SidesAnimationWrapper>
                        ))}

                    </Box>
                </Box>
                {/*------CAMERA DETAILS-----*/}
            </Container>
        </Box>
  );
};

export default AboutMeInfo;