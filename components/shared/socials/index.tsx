import React from 'react';
import { Box, Chip, Divider } from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Socials = () => {
  return (
      <div>
      <Divider className='text-contrast divider-edit'>
          <Chip className='text-lg bg-white text-black font-prompt font-bold' label="Socials"/>
      </Divider>

        <Box className='flex justify-center gap-4 mt-6'>
            <Link target='_blank' href='https://www.facebook.com/profile.php?id=100062974131967'>
                <FacebookIcon className='text-contrast' fontSize='large'/>
            </Link>
            <Link target='_blank' href='https://www.instagram.com/rasno_ph/'>
                <InstagramIcon className='text-contrast' fontSize='large'/>
            </Link>
        </Box>
      </div>
  );
};

export default Socials;