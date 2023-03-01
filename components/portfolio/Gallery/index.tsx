import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { CategoryName } from '@prisma/client';

import { categoriesNav } from '@/lib/contants/portfolioConstants';
import DropAnimationHeaderWrapper from '@/components/shared/animations/DropAnimationHeaderWrapper';
import ResponsiveGallery from '@/components/portfolio/Gallery/components/ResponsiveGallery';
import ButtonAnimationWrapper from '@/components/shared/animations/ButtonAnimationWrapper';
import PicturesMissing from '@/components/portfolio/Gallery/components/PicturesMissing';

import { PictureData, PictureI } from '../../../types/misc';

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
    if (category === 'allCategories') return setCurrentDisplayedPictures({ pictures: allPictures, category: 'allCategories' });
    return setCurrentDisplayedPictures({ pictures: picturesData[category], category });
  };

  return (
        <Container maxWidth='xl'>
            <DropAnimationHeaderWrapper>
                <Box className='border-2 border-contrast w-fit flex flex-wrap justify-center mx-auto m-8'>
                    {categoriesNav.map(category => (
                        <Button onClick={() => handleCategoryChange(category.categoryName)} className='p-5'
                                key={category.id}>
                            <ButtonAnimationWrapper>
                                <Typography
                                    className={`text-contrast font-prompt text-2xl ${currentDisplayedPictures.category === category.categoryName ? ' border-b-2 border-accent' : ''}`}>
                                    {category.title}
                                </Typography>
                            </ButtonAnimationWrapper>
                        </Button>
                    ))}
                </Box>
            </DropAnimationHeaderWrapper>
            {currentDisplayedPictures?.pictures ? <ResponsiveGallery pictures={currentDisplayedPictures?.pictures}/> : <PicturesMissing/>}
        </Container>

  );
};

export default GalleryBrowser;