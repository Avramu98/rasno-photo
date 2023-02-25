import React from 'react';
import { OsTypeI, PictureI } from '../../../types';
import { EffectCards, EffectCoverflow, Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';

const PictureCard = dynamic(() => import('@/components/elements/cms/PictureCard'));

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const SwiperContainer = ({ os, pictures, toggle }: any) => {
  switch (os) {
    case OsTypeI.IOS:
    case OsTypeI.ANDROID:
      return (
                <div className='md:flex flex-wrap gap-3 m-10 w-60'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        cardsEffect={{ slideShadows: false }}
                        className="mySwiper"
                    >
                        {pictures?.map((picture: PictureI) => {
                          return (
                                <SwiperSlide
                                    style={{ background: 'none' }}
                                    key={picture.id}>
                                    <PictureCard {...picture}/>
                                </SwiperSlide>
                          );
                        })}
                    </Swiper>
                </div>
      );
    default:
      if (!toggle) {
        return (
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        breakpoints={{
                          600: {
                            slidesPerView: 3,
                          },
                          1024: {
                            slidesPerView: 4,
                          },
                        }}
                        slidesPerView={4}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {pictures?.map((picture: PictureI) => {
                          return <SwiperSlide style={{ background: 'none' }}
                                                key={picture.id}><PictureCard {...picture}/></SwiperSlide>;
                        })}
                    </Swiper>
        );
      } else {
        return (
                    <div style={{ minHeight: '30rem' }}>
                        <Swiper
                            slidesPerView={4}
                            grid={{
                              rows: 2,
                              fill: 'row',
                            }}
                            spaceBetween={32}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="mySwiper"
                        >
                            {pictures?.map((picture: PictureI) => {
                              return <SwiperSlide
                                    key={picture.id}><PictureCard {...picture}/></SwiperSlide>;
                            })}
                        </Swiper>
                    </div>
        );
      }
  }
};

export default SwiperContainer;