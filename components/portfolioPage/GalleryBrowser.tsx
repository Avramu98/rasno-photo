import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { CategoryName } from '@prisma/client';

import { categoriesNav } from '@/lib/contants/portfolioConstants';
import DropAnimationHeaderWrapper from '@/components/animations/DropAnimationHeaderWrapper';
import Gallery from '@/components/portfolioPage/Gallery';
import ButtonAnimationWrapper from '@/components/animations/ButtonAnimationWrapper';

import { PictureData, PictureI } from '../../types/misc';

// @ts-ignore
const GalleryBrowser = ({
  picturesData,
  pickedCategoryFromLandingPage,
}: { picturesData: PictureData, pickedCategoryFromLandingPage: any }) => {

  // @ts-ignore
  const allPictures = [].concat(...Object.values(picturesData));
  const [currentDisplayedPictures, setCurrentDisplayedPictures] = useState<{ pictures: PictureI[], category: CategoryName | string }>({
    pictures: pickedCategoryFromLandingPage ? picturesData[pickedCategoryFromLandingPage] : allPictures,
    category: pickedCategoryFromLandingPage ?? 'allCategories',
  });

  const handleCategoryChange = (category: CategoryName | string) => {
    switch (category) {
      case CategoryName.EVENTS:
        return setCurrentDisplayedPictures({ pictures: picturesData[CategoryName.EVENTS], category });
      case CategoryName.NATURE:
        return setCurrentDisplayedPictures({ pictures: picturesData[CategoryName.NATURE], category });
      case CategoryName.SESSIONS:
        return setCurrentDisplayedPictures({ pictures: picturesData[CategoryName.SESSIONS], category });
      case CategoryName.STREET:
        return setCurrentDisplayedPictures({ pictures: picturesData[CategoryName.STREET], category });
      default:
        setCurrentDisplayedPictures({ pictures: allPictures, category: 'allCategories' });
    }
  };

  return (
        <Container maxWidth='xl'>
            <DropAnimationHeaderWrapper>
                <Box className='border-2 w-fit flex flex-wrap justify-center mx-auto m-8'>
                    {categoriesNav.map(category => (

                        <Button onClick={() => handleCategoryChange(category.categoryName)} className='p-5'
                                key={category.id}>
                            <ButtonAnimationWrapper>
                                <Typography
                                    className={`text-white font-prompt text-2xl ${currentDisplayedPictures.category === category.categoryName ? ' border-b-2 border-accent' : ''}`}>
                                    {category.title}
                                </Typography>
                            </ButtonAnimationWrapper>
                        </Button>
                    ))}
                </Box>
            </DropAnimationHeaderWrapper>
            <Gallery pictures={currentDisplayedPictures?.pictures}/>
        </Container>

  );
};

export default GalleryBrowser;