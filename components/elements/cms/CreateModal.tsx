import React, { useState } from 'react';
import { Box, Button, Divider, IconButton, MenuItem, Select, TextField } from '@mui/material';
import Image from 'next/legacy/image';
import Modal from '@/components/elements/modal';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import { CategoryName } from '@prisma/client';
import { CloudUpload } from '@mui/icons-material';

const testLoader = ({ src, quality }: any) => {
  return `${src}?w=250&q=${quality || 75}`;
};

interface CreateModalI {
  open: boolean;
  hide: () => void;
}

interface UploadDataI {
  description?: string
  category: CategoryName
  title?: string
}

enum FieldType {
  DESCRIPTION = 'DESCRIPTION',
  TITLE = 'TITLE',
  CATEGORY = 'CATEGORY',
}

const CreateModal = ({ open, hide }: CreateModalI) => {
  const BUCKET_URL = 'https://rasno-ph.s3.eu-west-3.amazonaws.com/';
  const [uploadData, setUploadData] = useState<UploadDataI>({
    title: '',
    description: '',
    category: CategoryName.EVENT,
  });

  console.log(uploadData);
  const [file, setFile] = useState<File | null>(null);
  const [uploadingStatus, setUploadingStatus] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<any>(null);

  const handleUpdatedData = (value: string | CategoryName, type: FieldType) => {
    switch (type) {
      case FieldType.DESCRIPTION:
        setUploadData((prevState) => ({ ...prevState, description: value }));
        break;
      case FieldType.TITLE:
        setUploadData((prevState) => ({ ...prevState, title: value }));
        break;
      case FieldType.CATEGORY:
        // @ts-ignore
        setUploadData((prevState) => ({ ...prevState, category: value }));
    }
  };

  const selectFile = (e: any) => {
    setFile(e.target.files);
  };


  const handleUpload = async () => {
    setUploadingStatus('Uploading the file to AWS S3');
    // @ts-ignore
    const filename = file[0].name;
    let { data } = await axios.post('../api/s3', {
      name: filename,
      // @ts-ignore
      type: file[0].type,
    });

    const url = data.url;
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { data: newData } = await axios.put(url, file[0], {
      headers: {
        // @ts-ignore
        'Content-type': file[0].type,
        'Access-Control-Allow-Origin': '*',
      },
    });
    // @ts-ignore
    setUploadedFile(BUCKET_URL + file[0].name);
    setFile(null);

    // const handlePost = (url:string) => {
    axios.post('./api/pictures/add', {
      // @ts-ignore
      imageUrl: `${BUCKET_URL}${file[0].name}`,
      title: uploadData.title,
      description: uploadData.description,
      category: uploadData.category,
      // @ts-ignore
      key: file[0].name,
    })
      .then(function (response) {
        console.log(response);
        setUploadingStatus('Done');
      });
    // }

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
                    />
                    <h1>{uploadingStatus}</h1>
                    <IconButton component='label'>
                        <input onChange={selectFile} hidden accept="image/*" type="file"/>
                        <CloudUpload/></IconButton>

                </Box>
                {/*----------HEADER----------*/}

                <Divider className='divider-edit'>
                    <InfoIcon className='text-accent' fontSize='large'/>
                </Divider>

                {/*----------PICTURE-------*/}
                <Box className='relative w-96 h-96'>
                    {uploadedFile && <Image
                        loader={testLoader}
                        src={uploadedFile}
                        alt="pictures"
                        objectFit='cover'
                        layout='fill'
                    />}
                </Box>
                {/*----------PICTURE-------*/}

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={uploadData.category}
                    label="Category"
                    onChange={(e) => handleUpdatedData(e.target.value, FieldType.CATEGORY)}
                >
                    <MenuItem value={CategoryName.EVENT}>Event</MenuItem>
                    <MenuItem value={CategoryName.LANDSCAPE}>Landscape</MenuItem>
                </Select>

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
                        onClick={handleUpload}
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

export default CreateModal;