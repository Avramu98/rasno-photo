import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { signOut } from 'next-auth/react';

import { AppContext } from '@/lib/context/appContext';

import { ModalTypeI } from '../../types/context';

const CmsHeader = () => {
  const { openModal } = useContext(AppContext);

  return (
        <AppBar
            className='text-white bg-transparent border-b border-white'
            position='static'>
            <Toolbar>
                <Typography
                    className='text-accent'
                    variant="h6"
                    sx={{ flexGrow: 1 }}>
                    RasnoPH
                </Typography>
                <IconButton
                    aria-label='Create Picture'
                    onClick={() => openModal(ModalTypeI.CREATE)}>
                    <AddAPhotoIcon className='text-accent'/>
                </IconButton>
                <IconButton
                    aria-label='SignOut'
                    onClick={() => signOut()}>
                    <ExitToAppIcon className='text-accent'/>
                </IconButton>
            </Toolbar>
        </AppBar>
  );
};

export default CmsHeader;