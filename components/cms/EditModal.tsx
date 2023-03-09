import React, { useContext, useState } from 'react';
import { Box, Button, MenuItem, Select, TextField } from '@mui/material';
import Image from 'next/legacy/image';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { CategoryName } from '@prisma/client';

import { ModalI, PictureI } from 'types/misc';
import ModalWrapper from '@/components/shared/modal/ModalWrapper';
import { blurDataURL, pictureCategories } from '@/lib/contants/cmsConstants';
import { CmsContext } from '@/lib/context/cmsContext';
import { AppContext } from '@/lib/context/appContext';

import { SnackbarTypeI } from '../../types/context';
import { FieldType } from '../../types/cms';

const EditModal = ({ picture, activeModal, closeModal }: ModalI) => {
  const { mutate, setCurrentPicture } = useContext(CmsContext);
  const { openSnackbar } = useContext(AppContext);
  const [updatedData, setUpdatedData] = useState<Partial<PictureI>>({
    ...picture,
  });

  const handleUpdatedData = (newValue: string, type: FieldType) => {
    setUpdatedData((prevState) => ({ ...prevState, [type]: newValue }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`api/pictures/${picture.id}`, {
        title: updatedData.title,
        description: updatedData.description,
        category: updatedData.category,
      }).then(() => {
        mutate();
        setCurrentPicture(null);
        openSnackbar('Picture updated successfully!', SnackbarTypeI.SUCCESS);
        closeModal();
      });
    } catch (res) {
      // @ts-ignore
      openSnackbar(res.response.data.message, SnackbarTypeI.ERROR);
    }
  };

  return (
        <ModalWrapper activeModal={activeModal}>
            {/*------MODAL CONTENT-----*/}
            <Box className=' bg-white shadow-2xl rounded-2xl flex flex-col gap-2'>

                {/*----------HEADER----------*/}
                <Box className='px-3 pt-4 relative'>
                    <TextField size='small' label='Title' className='w-full'
                               variant='outlined'
                               inputProps={{ maxLength: 25 }}
                               onChange={(e) => handleUpdatedData(e.target.value, FieldType.TITLE)}
                               defaultValue={picture.title}/>
                </Box>
                {/*----------HEADER----------*/}

                {/*----------PICTURE-------*/}
                <Box className='relative w-80 h-80'>
                    <Image
                        src={picture.imageUrl}
                        alt="pictures"
                        objectFit='cover'
                        layout='fill'
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                    />
                </Box>
                {/*----------PICTURE-------*/}

                {/*-----------CATEGORY-------*/}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className='mx-3'
                    style={{ zIndex: 999 }}
                    value={updatedData?.category}
                    onChange={(e) => handleUpdatedData(e.target.value, FieldType.CATEGORY)}
                >
                    {
                        pictureCategories.map((category: CategoryName) => {
                          return (
                                <MenuItem key={category} value={category}>{category}</MenuItem>
                          );
                        })
                    }
                </Select>
                {/*-----------CATEGORY-------*/}

                {/*--------DESCRIPTION-------*/}
                <Box className='px-3 pt-4'>
                    <TextField
                        label='Description'
                        multiline
                        rows={4}
                        size='small'
                        inputProps={{ maxLength: 120 }}
                        className='w-full rounded-2xl '
                        onChange={(e) => handleUpdatedData(e.target.value, FieldType.DESCRIPTION)}
                        defaultValue={picture.description}/>
                </Box>
                {/*--------DESCRIPTION-------*/}

                {/*--------CTA-------*/}
                <Box className='flex justify-center h-12 mt-2 rounded-b-2xl overflow-hidden'>
                    <Button onClick={() => {
                      setCurrentPicture(null);
                      closeModal();
                    }}
                            className='w-full text-secondary border-accent rounded-none hover:bg-accent'
                            variant='outlined'
                            startIcon={<CancelIcon className='text-secondary' fontSize='large'/>}>CLOSE</Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={JSON.stringify(picture) === JSON.stringify(updatedData)}
                        className='w-full text-secondary border-accent rounded-none hover:bg-accent'
                        variant='outlined'
                        endIcon={<EditIcon className='text-secondary ' fontSize='large'/>}>Edit</Button>
                </Box>
                {/*--------CTA-------*/}


            </Box>
            {/*------MODAL CONTENT-----*/}

        </ModalWrapper>
  );
};

export default EditModal;