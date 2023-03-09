import React, { useEffect, useState } from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/legacy/image';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { useMobileCheck } from '@/lib/hooks/useMobileCheck';
import { categoryItems } from '@/lib/contants/landingPageContants';
import ButtonAnimationWrapper from '@/components/shared/animations/ButtonAnimationWrapper';


const CategoryPresentation = () => {
  const { isPhone } = useMobileCheck();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleImage = (pictures:any) => {
    if (isPhone) {
      if (pictures.mobile) return pictures.mobile;
      return pictures.landscape;
    } 
    return pictures.landscape;
  };

  if (!mounted) {
    return <div style={{ width:'100vw', height:'100vh' }}/>;
  }

  return (
        <Swiper
            navigation={!isPhone}
            autoplay={{
              delay: 4000,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper h-full">
            {categoryItems?.map((categoryItem) => {
              return (
                    <SwiperSlide key={categoryItem.id}>
                        <div className='flex items-center h-full justify-center font-poppins'>
                            <Image
                                src={handleImage(categoryItem.picture)}
                                alt="pictures"
                                priority={true}
                                objectFit='cover'
                                layout='fill'
                            />
                            <ButtonAnimationWrapper>
                                <Link
                                    href={{
                                      pathname: '/portfolio',
                                      query: { pickedCategoryFromLandingPage: categoryItem.categoryName },
                                    }}>
                                    <div className='relative z-40 pointer'>
                                        <span
                                            className='absolute animate-ping w-3 h-3 top-1/4 rounded-full bg-accent opacity-100'/>
                                        <Typography
                                            className='p-4 text-5xl font-prompt font-bold border-b-4 border-accent md:text-5xl lg:text-6xl text-white italic'>
                                            {categoryItem.title}
                                        </Typography>
                                    </div>
                                </Link>
                            </ButtonAnimationWrapper>
                        </div>

                    </SwiperSlide>
              );
            })}
        </Swiper>
  );
};
export default CategoryPresentation;


