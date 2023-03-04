import React, {  useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';

import { categoriesNav } from '@/lib/contants/portfolioConstants';
import DropAnimationHeaderWrapper from '@/components/shared/animations/DropAnimationHeaderWrapper';
import ResponsiveGallery from '@/components/portfolio/Gallery/components/ResponsiveGallery';
import ButtonAnimationWrapper from '@/components/shared/animations/ButtonAnimationWrapper';
import PicturesMissing from '@/components/portfolio/Gallery/components/PicturesMissing';


const fetcher = async (url:string) => {
  const data = await axios.get(url);
  return {
    picturesData: data?.data?.picturesData,
  };
};

const GalleryBrowser = () => {
  const router = useRouter();
  const { pickedCategoryFromLandingPage } = router.query;
  const [selectedCategory, setSelectedCategory] = useState<any>(pickedCategoryFromLandingPage || '');

  const getKey = (pageIndex:any, previousPageData:any) => {
    if (previousPageData && !previousPageData.picturesData.length) return null;
    return `/api/pictures/get-pictures-by-category?page=${pageIndex + 1}&category=${selectedCategory}`;
  };

  const { data, error, size, isLoading, setSize, isValidating } = useSWRInfinite(getKey, fetcher, {
    revalidateOnFocus: false,
  });

  const picturesData = data ? data.flatMap(obj => obj.picturesData) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
        isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isReachingEnd = !isLoadingMore && (data && data[data.length - 1]?.picturesData.length < 1);


  return (
        <Container maxWidth='xl'>
            <DropAnimationHeaderWrapper>
                <Box className='border-2 border-contrast w-fit flex flex-wrap justify-center mx-auto m-8'>
                    {categoriesNav.map(category => (
                        <Button onClick={() => setSelectedCategory(category.categoryName)} className='p-5'
                                key={category.id}>
                            <ButtonAnimationWrapper>
                                <Typography
                                    // className={`text-contrast font-prompt text-2xl ${datea.category === category.categoryName ? ' border-b-2 border-accent' : ''}`}
                                    className={'text-contrast font-prompt text-2xl }'}
                                    >
                                    {category.title}
                                </Typography>
                            </ButtonAnimationWrapper>
                        </Button>
                    ))}
                </Box>
            </DropAnimationHeaderWrapper>

            {picturesData && !isLoading ?
                <ResponsiveGallery error={error} isLoadingInitialData={isLoadingInitialData} isValidating={isValidating} isReachingEnd={isReachingEnd} setSize={setSize} size={size} isLoadingMore={isLoadingMore} pictures={picturesData}/>
              : <PicturesMissing/>}

        </Container>

  );
};

export default GalleryBrowser;