import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/legacy/image';

import SidesAnimationWrapper from '@/components/shared/animations/SidesAnimationWrapper';
import { cameraDetails } from '@/lib/contants/aboutPageConstants';
import { useMobileCheck } from '@/lib/hooks/useMobileCheck';
import FadeInAnimationWrapper from '@/components/shared/animations/FadeInAnimationWrapper';

import { SideType } from '../../../../types/misc';

const CameraDetails = () => {
  const { isPhone } = useMobileCheck();

  return (
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
                    <FadeInAnimationWrapper key={detail}>
                        <Typography className='font-poppins text-contrast'>🔶 {detail}</Typography>
                    </FadeInAnimationWrapper>
                ))}

            </Box>
        </Box>
  );
};

export default CameraDetails;