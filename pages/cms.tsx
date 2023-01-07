import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import useSWR from 'swr';
import useModal from '@/lib/hooks/useModal';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const AppHeader = dynamic(() => import('@/components/elements/cms/AppHeader'));
const SwiperContainer = dynamic(() => import('@/components/elements/swiper-container'));
const CreateModal = dynamic(() => import('@/components/elements/cms/CreateModal'));

import { ModalTypeI, PictureI } from '../types';

// export async function getServerSideProps(ctx: { res: { getHeader: (arg0: string) => any; }; }) {
//   // const pictures = await axios.get('/api/pictures');
//   // const data = pictures.data;
//   const os = ctx.res.getHeader('x-os-type');
//   return {
//     props: { os },
//   };
// }

const fetcher = async () => {
  const data = await axios.get('./api/pictures');
  return {
    picturesData: data.data.picturesData,
  };
};

export interface CmsInterface {
  picturesData: PictureI[]
}

// @ts-ignore
const Cms = () => {
  const os = 'muie';
  const { data } = useSWR('photos', fetcher);
  const events = data?.picturesData.filter((picture: PictureI) => picture.category === 'EVENT');
  const landscape = data?.picturesData.filter((picture: PictureI) => picture.category === 'LANDSCAPE');
  const [toggleMode, setToggle] = useState<boolean>(false);
  const { open, toggle, modalType } = useModal();

  return (
        <>
            <AppHeader/>
            <Button onClick={() => setToggle((prevState => !prevState))}>Toggle</Button>
            <Button onClick={() => toggle(ModalTypeI.CREATE)}>Create</Button>
            <Container>
                <Divider className='divider-edit m-6'>
                    EVENTS
                </Divider>
                <SwiperContainer toggle={toggleMode} os={os} pictures={events}/>
                <Divider className='divider-edit m-6'>
                    LANDSCAPE
                </Divider>
                <SwiperContainer toggle={toggleMode} os={os} pictures={landscape}/>
                <Divider className='divider-edit m-6'>
                    Testing
                </Divider>
                <Box className='group h-20 border-2'>
                    <h1 className='group-hover:opacity-100 duration-400 transition ease-in-out delay-150  opacity-0'>Testing
                        stuff</h1>
                </Box>

            </Container>

            {modalType === ModalTypeI.CREATE &&
                <CreateModal
                    open={open}
                    hide={toggle}
                />}
        </>
  );
};

export default Cms;