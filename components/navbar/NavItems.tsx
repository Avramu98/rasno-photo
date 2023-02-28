import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ButtonAnimationWrapper from '@/components/animations/ButtonAnimationWrapper';

import { NavItemI } from '../../types/landingPage';

const NavItem = ({ name, redirectLink }: NavItemI) => {
  const router = useRouter();

  return (
        <Link href={redirectLink}>
            <Box className='cursor-pointer h-full flex items-center'>
                <ButtonAnimationWrapper>
                    <Typography
                        variant='h5'
                        className={`font-prompt italic font-light text-contrast ${router.pathname === redirectLink ? 'border-b-2 border-accent' : 'border-0'}`}>{name}</Typography>
                </ButtonAnimationWrapper>
            </Box>
        </Link>

  );
};

export default NavItem;