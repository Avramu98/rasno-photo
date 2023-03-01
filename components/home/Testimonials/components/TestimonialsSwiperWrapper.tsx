import React from 'react';

// eslint-disable-next-line import/order
import { useMobileCheck } from '@/lib/hooks/useMobileCheck';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import { EffectCoverflow } from 'swiper';
import { Swiper } from 'swiper/react';

const TestimonialsSwiperWrapper = ({ children }: any) => {
  const { isPhone } = useMobileCheck();

  return (
        <Swiper
            style={{ margin: isPhone ? '0 0 0 -40px' : '0', padding: '3rem 0' }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isPhone ? 2 : 5}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper h-fit"
        >
            {children}
        </Swiper>
  );

};

export default TestimonialsSwiperWrapper;