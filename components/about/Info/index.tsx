import React from 'react';
import { Box, Container } from '@mui/material';
import Image from 'next/legacy/image';

import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';
import CameraDetails from '@/components/about/Info/components/CameraDetails';

import SidesAnimationWrapper from '../../shared/animations/SidesAnimationWrapper';
import { SideType } from '../../../types/misc';

const AboutMeInfo = () => {
  return (
            <Container maxWidth='lg'>
                <Box className='container items-center '>
                    <AnimatedHeader moreStyles='py-10' text='Hai să-ți spun mai multe despre mine.'/>

                    <SidesAnimationWrapper side={SideType.LEFT}>
                        <Box style={{ overflow: 'hidden' }} className='relative h-80 w-80 md:h-96 md:w-96 shadow-2xl shadow-cyan-500/50 rounded-2xl'>
                            <Image
                                alt="pictures"
                                   priority={true}
                                   objectFit='contain'
                                   layout='fill'
                                   src='/static/profile-rasno.webp'/>
                        </Box>
                    </SidesAnimationWrapper>

                    <AnimatedSubheader text='Sunt Râșno, un fotograf care urmează studiile Digital Media la FSPAC. Am 5 ani de experiență în capturarea momentelor unice prin intermediul obiectivelor mele, specializându-mă în poze de party, natură, street photography și sessions.'/>
                    <CameraDetails/>
                </Box>
            </Container>
  );
};

export default AboutMeInfo;