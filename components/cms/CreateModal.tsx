import React, { useContext, useState } from 'react';
import { Box, Button, IconButton, MenuItem, Select, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { CategoryName } from '@prisma/client';
import { CloudUpload } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import { Default } from 'react-awesome-spinners';

import ModalWrapper from '@/components/modal/ModalWrapper';
import { pictureCategories } from '@/lib/contants/cmsConstants';
import { CmsContext } from '@/lib/context/cmsContext';
import { AppContext } from '@/lib/context/appContext';

import { SnackbarTypeI } from '../../types/context';
import { FieldType, UploadDataI } from '../../types/cms';
import { ModalI } from '../../types/misc';

const CreateModal = ({ activeModal, closeModal }: Pick<ModalI, 'activeModal' | 'closeModal'>) => {
  const { mutate } = useContext(CmsContext);
  const { openSnackbar } = useContext(AppContext);

  const BUCKET_URL = `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.eu-west-3.amazonaws.com/`;
  const [uploadData, setUploadData] = useState<UploadDataI>({
    title: '',
    description: '',
    category: CategoryName.EVENTS,
  });
  const [file, setFile] = useState<File | null>(null);
  const [uploadingStatus, setUploadingStatus] = useState<string>('');

  const handleUpdatedData = (value: string | CategoryName, type: FieldType) => {
    setUploadData((prevState) => ({ ...prevState, [type]: value }));
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setUploadingStatus('Uploading the file to AWS S3');
    const filePath = file?.name;
    let { data } = await axios.post('../api/s3/upload-s3', {
      filePath,
      type: file?.type,
    });

    const url = data.url;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { data: newData } = await axios.put(url, file, {
      headers: {
        'Content-type': file?.type,
        'Access-Control-Allow-Origin': '*',
      },
    });
    setFile(null);

    axios.post('./api/pictures/create-picture', {
      imageUrl: `${BUCKET_URL}${filePath}`,
      title: uploadData.title,
      description: uploadData.description,
      category: uploadData.category,
    })
      .then(function (res) {
        setUploadingStatus('Done');
        mutate();
        closeModal();
        openSnackbar(res.data.message, SnackbarTypeI.SUCCESS);
      });

  };

  return (
        <ModalWrapper activeModal={activeModal}>
            {/*------MODAL CONTENT-----*/}
            <Box className='bg-white shadow-2xl rounded-2xl flex flex-col gap-2'>

                {/*----------HEADER----------*/}
                <Box className='px-3 pt-4 relative flex'>
                    <TextField size='small' label='Title' className='w-full'
                               variant='outlined'
                               inputProps={{ maxLength: 25 }}
                               onChange={(e) => handleUpdatedData(e.target.value, FieldType.TITLE)}
                    />
                    <IconButton component='label'>
                        <input onChange={(e) => selectFile(e)} hidden accept="image/*" type="file"/>
                        <CloudUpload className='text-accent'/></IconButton>
                </Box>
                {/*----------HEADER----------*/}

                {/*----------PICTURE-------*/}
                <Box className='relative w-96 h-60'>
                    {uploadingStatus &&
                        <Box className='grid justify-items-center'>
                            <Typography variant='h6'
                                        className='text-center'>{uploadingStatus}</Typography>
                            <Default color='#FB8500'/>
                        </Box>}
                </Box>
                {/*----------PICTURE-------*/}

                {/*-----------CATEGORY-------*/}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={uploadData.category}
                    className='font-polaroid'
                    onChange={(e) => handleUpdatedData(e.target.value, FieldType.CATEGORY)}
                >
                    {
                        pictureCategories.map((category: CategoryName) => {
                          return (
                                <MenuItem key={category}
                                          value={category}>{category}</MenuItem>
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
                        inputProps={{ maxLength: 20 }}
                        className='w-full rounded-2xl '
                        onChange={(e) => handleUpdatedData(e.target.value, FieldType.DESCRIPTION)}
                    />
                </Box>
                {/*--------DESCRIPTION-------*/}

                {/*--------CTA-------*/}
                <Box className='flex justify-center h-12 mt-2'>
                    <Button onClick={closeModal}
                            className='w-full border-accent rounded-bl-xl text-secondary hover:bg-accent-light'
                            variant='outlined'
                            disabled={!!uploadingStatus}
                            startIcon={<CancelIcon className='text-secondary' fontSize='large'/>}>CLOSE</Button>
                    <Button
                        onClick={handleUpload}
                        className='w-full border-accent rounded-br-xl text-secondary hover:bg-accent-light'
                        variant='outlined'
                        disabled={!!uploadingStatus || !file}
                        endIcon={<CheckIcon className='text-secondary ' fontSize='large'/>}>Create</Button>
                </Box>
                {/*--------CTA-------*/}
            </Box>
            {/*------MODAL CONTENT-----*/}

        </ModalWrapper>
  );
};

export default CreateModal;
