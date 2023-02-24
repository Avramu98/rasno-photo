import * as React from 'react';
import { Box, Card, IconButton, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';

import { blurDataURL } from '@/lib/contants/cmsConstants';
import { PictureI } from 'types/misc';
import { CmsContext } from '@/lib/context/cmsContext';
import { AppContext } from '@/lib/context/appContext';

import { ModalTypeI } from '../../types/context';

const PictureCard = ({ picture }: { picture: PictureI }) => {
  const { setCurrentPicture } = useContext(CmsContext);
  const { openModal } = useContext(AppContext);
  const { description, title, imageUrl } = picture;

  return (
        <Card style={{ width: '255px' }}
              className={'group bg-white border-2 drop-shadow-lg p-3 font-poppins rounded-none relative'}>
            {/*-----------IMAGE-------*/}
            <div style={{ height: '270px', position: 'relative' }}>
                <Image
                    src={imageUrl}
                    alt="pictures"
                    priority={true}
                    objectFit='cover'
                    layout='fill'
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
            </div>
            {/*-----------IMAGE-------*/}

            {/*---------CTA-------*/}
            <Box
                className='w-full h-32 grid absolute top-0'>
                <Box className='place-self-end animation-opacity opacity-100 translate-x-12 flex flex-col'>
                    <IconButton
                        onClick={() => {
                          setCurrentPicture(picture);
                          openModal(ModalTypeI.EDIT);
                        }}
                        className=' text-accent p-1 '
                        aria-label="edit">
                        <EditIcon className='rounded-full border-accent border-2 text-3xl'/>
                    </IconButton>

                    <IconButton
                        onClick={() => {
                          setCurrentPicture(picture);
                          openModal(ModalTypeI.DELETE);
                        }}
                        className='text-accent p-1'
                        aria-label="edit">
                        <DeleteIcon className='rounded-full border-accent border-2 text-3xl'/>
                    </IconButton>
                </Box>
            </Box>
            {/*---------CTA-------*/}

            {/*------INFORMATION------*/}
            <Box className='h-20'>
                {/*---------TITLE-------*/}
                {title && <Typography
                    variant='h6'
                    className='w-full font-polaroid text-center'>{title}
                </Typography>}
                {/*---------TITLE-------*/}

                {/*--------DESCRIPTION-------*/}
                <Box className='w-full'>
                    {description &&
                        <Typography
                            className='font-polaroid text-xs'>{description}
                        </Typography>}
                </Box>
                {/*--------DESCRIPTION-------*/}
            </Box>
            {/*------INFORMATION------*/}

        </Card>
  );
};

export default PictureCard;