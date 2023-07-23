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
                    <AnimatedHeader moreStyles='py-10' text='Let me tell you more about myself'/>

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

                    <AnimatedSubheader text='I am Râșno, a photographer currently pursuing Digital Media studies at FSPAC. With 5 years of experience, I specialize in capturing unique moments through my lenses, focusing on party, nature, street photography, and sessions.'/>
                    <CameraDetails/>
                </Box>
            </Container>
  );
};

export default AboutMeInfo;