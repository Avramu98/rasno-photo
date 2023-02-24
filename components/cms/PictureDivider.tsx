import React, { useContext } from 'react';
import { Divider, IconButton, Typography } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { CategoryName } from '@prisma/client';

import { CmsContext } from '@/lib/context/cmsContext';
import { useMobileCheck } from '@/lib/hooks/useMobileCheck';

const PictureDivider = ({ categoryName }: { categoryName: CategoryName }) => {
  const { isSpecificLargeSwiperToggled, toggleSwiper } = useContext(CmsContext);
  const { isPhone } = useMobileCheck();

  return (
        <Divider className='divider-edit m-6 flex'>
            <Typography className={'text-white font-polaroid'} variant='h6'>{categoryName}</Typography>
            {!isPhone && <IconButton aria-label='extend/fold' onClick={() => toggleSwiper(categoryName)}>
                {isSpecificLargeSwiperToggled[categoryName]
                  ? <OpenInFullIcon className='text-accent'/>
                  : <CloseFullscreenIcon className='text-accent'/>}
            </IconButton>}
        </Divider>
  );
};

export default PictureDivider;