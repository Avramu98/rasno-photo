import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Router from 'next/router';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import ButtonAnimationWrapper from '@/components/animations/ButtonAnimationWrapper';

const Login = () => {
  const { data: session } = useSession();

  const handleLogin = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    if (session?.user?.email &&
            session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
      Router.push('/cms');
    }
  }, [session?.user]);

  if (!session)
    return (
            <Container maxWidth='lg' className='grid place-items-center h-screen'>
                <Box className='flex flex-col justify-center items-center gap-10'>
                    <Typography variant='h2' className='font-poppins text-white italic'>Not signed in ....</Typography>
                    <ButtonAnimationWrapper>
                        <Button onClick={handleLogin} variant='outlined'
                                className='font-prompt text-lg font-bold text-white border-white'>
                            Login
                        </Button>
                    </ButtonAnimationWrapper>
                </Box>
            </Container>
    );

  if (session && session.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL)

    return (
            <Container maxWidth='lg' className='grid place-items-center h-screen'>
                <Box className='flex flex-col justify-center items-center gap-10'>
                    <Typography variant='h2' className='font-poppins text-white italic'>{
                        `Hello ${session?.user?.name}`}</Typography>
                    <div className='relative flex items-center h-20 w-20 justify-center font-poppins'>
                        {session?.user?.image && <Image
                            src={session?.user?.image}
                            alt="pictures"
                            priority={true}
                            objectFit='cover'
                            layout='fill'
                        />}
                    </div>

                    <ButtonAnimationWrapper>
                        <Button onClick={handleSignOut} variant='outlined'
                                className='font-prompt text-lg font-bold text-white border-white'>
                            Sign Out
                        </Button>
                    </ButtonAnimationWrapper>
                </Box>
            </Container>
    );

};

export default Login;