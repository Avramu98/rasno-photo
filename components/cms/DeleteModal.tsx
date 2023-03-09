import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';

import ModalWrapper from '@/components/shared/modal/ModalWrapper';
import { CmsContext } from '@/lib/context/cmsContext';
import { AppContext } from '@/lib/context/appContext';
import { ModalI } from 'types/misc';

import { SnackbarTypeI } from '../../types/context';

const DeleteModal = ({ activeModal, picture, closeModal }: ModalI) => {
  const { mutate } = useContext(CmsContext);
  const { openSnackbar } = useContext(AppContext);

  const handleDelete = async () => {
    const objectKey = picture.imageUrl.split('.com/');
    await axios.delete(`../api/pictures/${picture?.id}`, {
      data: { pictureName: objectKey[1] },
    }).then((res) => {
      openSnackbar(res.data.message, SnackbarTypeI.SUCCESS);
      mutate();
    }).catch((res) => {
      openSnackbar(res.response.data.message, SnackbarTypeI.ERROR);
    });

  };

  return (
        <ModalWrapper activeModal={activeModal}>
            <Box className='bg-white p-4 rounded-2xl'>
                <h1>Are you sure you want to delete this picture?</h1>
                <Box className='flex justify-center'>
                    <Button
                        onClick={closeModal}
                        className='text-accent p-1'
                        aria-label="edit">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                          handleDelete().then(closeModal);
                        }}
                        className='text-accent p-1'
                        aria-label="edit">
                        Confirm
                    </Button>
                </Box>
            </Box>
        </ModalWrapper>
  );
};

export default DeleteModal;
