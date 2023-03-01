import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/legacy/image';

import { ServiceI } from 'types/servicePage';
import { blurDataURL } from '@/lib/contants/cmsConstants';
import WaterfallListAnimationWrapper from '@/components/shared/animations/WaterfallListAnimationWrapper';
import AnimateCrushFromLeft from '@/components/shared/animations/AnimateCrushFromLeft';

const SingleService = ({ picture, title, options }: Omit<ServiceI, 'id'>) => {
  const optionsArr = options.split('/');


  return (
        <Box className='flex md:flex-row flex-col py-4'>

            {/*-------IMAGE-----*/}
                <AnimateCrushFromLeft>
                    <Box
                       className='w-full relative shadow-2xl shadow-cyan-500/50 rounded-2xl '
                       style={{ height: '400px', overflow: 'hidden' }}
                    >
                        <Image
                            src={picture.landscape}
                            alt="pictures"
                            priority={true}
                            objectFit='cover'
                            layout='fill'
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                        />
                    </Box>
                </AnimateCrushFromLeft>

            {/*-------IMAGE-----*/}

            {/*------OPTIONS DETAILS------*/}
            <Box className='w-full md:w-1/2' style={{ height: '400px' }}>

                {/*-----OPTIONS HEADER-----*/}
                {/*//TODO FIX THIS*/}
                <WaterfallListAnimationWrapper>
                <Typography className='text-center text-contrast pt-4 pb-8 md:pb-8 font-prompt font-bold text-3xl'>
                        {title.toUpperCase()}
                </Typography>
                {/*-----OPTIONS HEADER-----*/}
                {/*-----OPTIONS DISPLAY----*/}
                {optionsArr.map((option: string) => (
                        <Typography
                            key={option}
                            className='font-poppins text-contrast text-sm md:text-md lg:text-md xl:text-xl px-6 py-1'>{`${option}`}</Typography>
                ))}
                </WaterfallListAnimationWrapper>

                {/*-----OPTIONS DISPLAY----*/}
            </Box>
            {/*------OPTIONS DETAILS------*/}

        </Box>
  );
};

export default SingleService;