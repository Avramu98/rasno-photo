import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';

import { ServiceI } from 'types/servicePage';
import { blurDataURL } from '@/lib/contants/cmsConstants';
import WaterfallListAnimationWrapper from '@/components/animations/WaterfallListAnimationWrapper';
import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';

const Service = ({ picture, title, options }: Omit<ServiceI, 'id'>) => {
  const optionsArr = options.split('/');

  return (
        <Box className='flex md:flex-row flex-col py-4'>

            {/*-------IMAGE-----*/}
            <motion.div
                className='w-full md:w-[50%] relative shadow-2xl shadow-cyan-500/50 rounded-2xl ' style={{ height: '400px', overflow: 'hidden' }}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ type: 'spring', damping: 10, stiffness: 50 }}
            >
                <Image
                    src={picture}
                    alt="pictures"
                    priority={true}
                    objectFit='cover'
                    layout='fill'
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
            </motion.div>

            {/*-------IMAGE-----*/}

            {/*------OPTIONS DETAILS------*/}
            <Box className='w-full md:w-1/2' style={{ height: '400px' }}>

                {/*-----OPTIONS HEADER-----*/}
                <DropAnimationHeaderWrapper>
                    <Typography className='text-center text-contrast pt-4 pb-8 md:pb-8 font-prompt font-bold text-3xl'>
                        {title.toUpperCase()}
                    </Typography>
                </DropAnimationHeaderWrapper>
                {/*-----OPTIONS HEADER-----*/}


                {/*-----OPTIONS DISPLAY----*/}
                {optionsArr.map((option: string) => (
                    <WaterfallListAnimationWrapper key={option}>
                        <Typography
                            className='font-poppins text-contrast text-sm md:text-md lg:text-md xl:text-xl px-6 py-1'>{`${option}`}</Typography>
                    </WaterfallListAnimationWrapper>
                ))}
                {/*-----OPTIONS DISPLAY----*/}

            </Box>
            {/*------OPTIONS DETAILS------*/}

        </Box>
  );
};

export default Service;