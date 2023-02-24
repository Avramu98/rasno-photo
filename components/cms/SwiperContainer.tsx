import React, { useContext } from 'react';
import { EffectCoverflow, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CmsContext } from '@/lib/context/cmsContext';
// eslint-disable-next-line import/order
import PictureCard from '@/components/cms/PictureCard';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { useMobileCheck } from '@/lib/hooks/useMobileCheck';

import { PictureI } from '../../types/misc';
import { SwiperContainerI } from '../../types/cms';

const SwiperContainer = ({
  pictures,
  categoryName,
}: SwiperContainerI) => {
  const { isSpecificLargeSwiperToggled } = useContext(CmsContext);
  const { isPhone } = useMobileCheck();

  if (isSpecificLargeSwiperToggled[categoryName]) {
    return (
            <div style={{ minHeight: '30rem' }}>
                <Swiper
                    breakpoints={{
                      850: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1000: {
                        slidesPerView: 4,
                        spaceBetween: 28,
                      },
                      1450: {
                        slidesPerView: 5,
                        spaceBetween: 28,
                      },
                    }}
                    slidesPerView={5}
                    grid={{
                      rows: 2,
                      fill: 'row',
                    }}
                    spaceBetween={32}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Grid]}
                    className="mySwiper"
                >
                    {pictures?.map((picture: PictureI) => {
                      return (
                            <SwiperSlide
                                key={picture.id}>
                                <PictureCard picture={picture}/>
                            </SwiperSlide>);
                    })}
                </Swiper>
            </div>
    );
  }

  return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              1000: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
            }}
            slidesPerView={isPhone ? 2 : 6}
            coverflowEffect={{
              rotate: 50,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            className="mySwiper p-4"
        >
            {pictures?.map((picture: PictureI) => {
              return (
                    <SwiperSlide
                        key={picture.id}>
                        <PictureCard picture={picture}/>
                    </SwiperSlide>);
            })}
        </Swiper>
  );
};

export default SwiperContainer;