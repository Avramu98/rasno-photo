import Link from 'next/link';
import { Box } from '@mui/material';
import Image from 'next/legacy/image';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width:110, height:70 }}/>;
  }

  return (
        <Box className='h-full grid place-items-center'>
            <Link href={'/'}>
                <Box className='grid place-items-center'>
                    <Image alt="pictures"
                           width='110'
                           height='65'
                           priority={true}
                           objectFit='contain'
                           src={`${theme === 'dark' ? '/static/logo-inverted.png' : '/static/logo.png'}`}/>
                </Box>
            </Link>
        </Box>
  );
};

export default Logo;