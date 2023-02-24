import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import axios from 'axios';
import useSWR from 'swr';
import { Box, Container } from '@mui/material';
import { CategoryName } from '@prisma/client';

import useSwiperToggle from '@/lib/hooks/useSwiperToggle';
import { CmsContext } from '@/lib/context/cmsContext';
import { pictureCategories } from '@/lib/contants/cmsConstants';
import LoadingScreen from '@/components/loading/LoadingScreen';
import PictureDivider from '@/components/cms/PictureDivider';
import SwiperContainer from '@/components/cms/SwiperContainer';
import CmsHeader from '@/components/cms/CmsHeader';

import 'swiper/css/effect-cards';
import 'swiper/css';

import { PictureI } from '../types/misc';

const Modal = dynamic(() => import('@/components/modal/Modal'));

const fetcher = async () => {
  const data = await axios.get('/api/pictures/get-pictures');
  return {
    picturesData: data?.data?.picturesData,
  };
};


const Cms = () => {
  const { data, isLoading, mutate } = useSWR('/api/pictures/get-pictures', fetcher);
  const [currentPicture, setCurrentPicture] = useState<PictureI | null>(null);
  const { isSpecificLargeSwiperToggled, toggleSwiper } = useSwiperToggle();

  if (isLoading) return <LoadingScreen/>;
  return (
        <div className='bg-cms bg-cover min-h-screen'>
            <Head>
                <title>CMS</title>
                <meta name="description" content="CMS page for content management"/>
            </Head>
            <CmsContext.Provider value={{
              isSpecificLargeSwiperToggled,
              toggleSwiper,
              mutate,
              setCurrentPicture,
            }}>
                <CmsHeader/>
                <Container maxWidth='xl' className="p-8">
                    {pictureCategories.map((category: CategoryName) => {
                      if (data?.picturesData && data?.picturesData[category]) {
                        return (
                                <Box key={category}>
                                    <PictureDivider categoryName={category}/>
                                    <SwiperContainer
                                        categoryName={category}
                                        pictures={data?.picturesData[category]}/>
                                </Box>
                        );
                      }
                    })}
                </Container>
                <Modal currentPicture={currentPicture}/>
            </CmsContext.Provider>
        </div>
  );
};

export default Cms;