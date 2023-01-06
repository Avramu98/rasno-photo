import React, { useState } from 'react';
import { Box, Button, Divider, TextField } from '@mui/material';
import Image from 'next/legacy/image';
import Modal from '@/components/elements/modal';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import { PictureI } from 'types';

const testLoader = ({ src, quality }: any) => {
  return `${src}?w=250&q=${quality || 75}`;
};

interface EditModalI {
  id: string;
  description: string;
  imageUrl: string;
  open: boolean;
  title: string;
  hide: () => void;
}

enum FieldType {
  DESCRIPTION = 'DESCRIPTION',
  TITLE = 'TITLE',
}

const EditModal = ({ id, imageUrl, description, title, open, hide }: EditModalI) => {
  const [updatedData, setUpdatedData] = useState<Partial<PictureI>>({
    title,
    description,
    id,
  });

  const handleUpdatedData = (newValue: string, type: FieldType) => {
    switch (type) {
      case FieldType.DESCRIPTION:
        setUpdatedData((prevState) => ({ ...prevState, description: newValue }));
        break;
      case FieldType.TITLE:
        setUpdatedData((prevState) => ({ ...prevState, title: newValue }));
    }
  };

  const handleSubmit = async () => {
    await axios.put('api/pictures/edit', {
      title: updatedData.title,
      description: updatedData.description,
      id: id,
    });
    hide();
  };

  return (
        <Modal open={open}>
            {/*------MODAL CONTENT-----*/}
            <Box className='bg-white border-2 border-accent shadow-2xl rounded-2xl flex flex-col gap-2'>

                {/*----------HEADER----------*/}
                <Box className='px-3 pt-4 relative'>
                    <TextField size='small' label='Title' className='w-full'
                               variant='outlined'
                               inputProps={{ maxLength: 25 }}
                               onChange={(e) => handleUpdatedData(e.target.value, FieldType.TITLE)}
                               defaultValue={title}/>
                </Box>
                {/*----------HEADER----------*/}

                <Divider className='divider-edit'>
                    <InfoIcon className='text-accent' fontSize='large'/>
                </Divider>

                {/*----------PICTURE-------*/}
                <Box className='relative w-96 h-96'>
                    <Image
                        loader={testLoader}
                        src={imageUrl}
                        alt="pictures"
                        objectFit='cover'
                        layout='fill'
                    />
                </Box>
                {/*----------PICTURE-------*/}

                {/*--------DESCRIPTION-------*/}
                <Box className='px-3 pt-4'>
                    <TextField
                        label='Description'
                        multiline
                        rows={4}
                        size='small'
                        inputProps={{ maxLength: 20 }}
                        className='w-full rounded-2xl '
                        onChange={(e) => handleUpdatedData(e.target.value, FieldType.DESCRIPTION)}
                        defaultValue={description}/>
                </Box>
                {/*--------DESCRIPTION-------*/}

                <Divider className='divider-edit'>
                    <InfoIcon className='text-accent' fontSize='large'/>
                </Divider>

                {/*--------CTA-------*/}
                <Box className='flex justify-center h-12 mt-2'>
                    <Button onClick={hide}
                            className='w-full border-accent rounded-bl-xl text-secondary hover:bg-accent-light'
                            variant='outlined'
                            startIcon={<CancelIcon className='text-secondary' fontSize='large'/>}>CLOSE</Button>
                    <Button
                        onClick={handleSubmit}
                        className='w-full border-accent rounded-br-xl text-secondary hover:bg-accent-light'
                        variant='outlined'
                        endIcon={<EditIcon className='text-secondary ' fontSize='large'/>}>Edit</Button>
                </Box>
                {/*--------CTA-------*/}


            </Box>
            {/*------MODAL CONTENT-----*/}

        </Modal>
  );
};

export default EditModal;