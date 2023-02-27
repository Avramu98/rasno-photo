import React from 'react';
import { Box, Typography } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import { ContactInformationI } from '../../types/contactPage';

const ContactColumn = ({ header, subtitle, icon }: Omit<ContactInformationI, 'id'>) => {
  const renderIcon = () => {
    switch (icon) {
      case 'mapIcon':
        return <MapIcon className='text-white' fontSize='large'/>;
      case 'phoneIcon':
        return <CallIcon className='text-white' fontSize='large'/>;
      case 'emailIcon':
        return <EmailIcon className='text-white' fontSize='large'/>;
    }
  };

  return (
        <Box
            className='last:border-0 w-full p-4 flex flex-col justify-center items-center gap-2 border-b-2 border-contrast md:border-0'>
            <Box className='rounded-full w-20 h-20 border-2 flex justify-center items-center bg-black'>
                {renderIcon()}
            </Box>
            <Typography className='text-contrast text-3xl font-prompt italic font-bold'>{header}</Typography>
            <Typography
                className='text-contrast font-prompt text-center text-xl font-light'>{subtitle}</Typography>
        </Box>
  );
};

export default ContactColumn;