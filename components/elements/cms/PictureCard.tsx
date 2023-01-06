import * as React from 'react';
import { Box, Card, Chip, IconButton, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useModal from '../../../lib/hooks/useModal';
import EditModal from '@/components/elements/cms/EditModal';
import { ModalTypeI } from 'types';

const testLoader = ({ src, quality }: any) => {
  return `${src}?w=250&q=${quality || 75}`;
};

export const PictureCard = ({ id, title, imageUrl, description, category }: any) => {
  const { open, toggle, modalType } = useModal();


  return (
        <Card className={'group bg-white font-poppins rounded-2xl relative'} style={{}}>

            {/*-----------IMAGE-------*/}
            <div style={{ width: '100%', height: '400px' }}>
                <Image
                    loader={testLoader}
                    src={imageUrl}
                    alt="pictures"
                    objectFit='cover'
                    layout='fill'
                />
            </div>
            {/*-----------IMAGE-------*/}

            {/*---------TITLE AND CTA-------*/}
            <Box
                className='w-full h-32 grid absolute top-0'>
                {title && <Typography
                    className='text-white backdrop-blur-md bg-black/20 w-full font-poppins p-3 text-center h-fit rounded-t-2xl'>{title}
                </Typography>}
                <Box className='place-self-end animation-opacity opacity-100 translate-x-12 flex flex-col'>
                    <IconButton
                        onClick={() => toggle(ModalTypeI.EDIT)}
                        className=' text-accent p-1 '
                        aria-label="edit">
                        <EditIcon className='rounded-full border-accent border-2 text-3xl'/>
                    </IconButton>

                    <IconButton
                        onClick={() => toggle(ModalTypeI.DELETE)}
                        className='text-accent p-1'
                        aria-label="edit">
                        <DeleteIcon className='rounded-full border-accent border-2 text-3xl'/>
                    </IconButton>
                </Box>
            </Box>
            {/*---------TITLE AND CTA-------*/}


            <Box className='h-32 absolute bottom-0 w-full'>
                {category &&
                    <Chip className='text-white backdrop-blur-md bg-black/20 m-1'
                          variant='outlined'
                          label={category}/>}
                {description &&
                    <p className='text-white backdrop-blur-md bg-black/20 h-full p-2 text-xs'>{description}</p>}
            </Box>


            {modalType === ModalTypeI.EDIT &&
                <EditModal
                    id={id}
                    imageUrl={imageUrl}
                    description={description}
                    title={title}
                    open={open}
                    hide={toggle}
                />}
        </Card>
  );
};
