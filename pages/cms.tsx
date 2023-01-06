import React, { useState } from 'react';
import { Box, Button, Container, Divider } from '@mui/material';

import axios from 'axios';
import { AppHeader } from '@/components/elements/cms';
import { ModalTypeI, PictureI } from '../types';
import 'swiper/css';
import 'swiper/css/effect-cards';
import SwiperContainer from '@/components/elements/swiper-container';
import useModal from '@/lib/hooks/useModal';
import CreateModal from '@/components/elements/cms/CreateModal';

export async function getServerSideProps(ctx: { res: { getHeader: (arg0: string) => any; }; }) {
  const pictures = await axios.get('https://rasno-ph-phtj.vercel.app//api/pictures');
  const data = pictures.data;
  const os = ctx.res.getHeader('x-os-type');
  return {
    props: { picturesData: data.picturesData, os },
  };
}

export interface CmsInterface {
  picturesData: PictureI[]
}

// @ts-ignore
const Cms = ({ picturesData, os }) => {
  const events = picturesData.filter((picture: PictureI) => picture.category === 'EVENT');
  const landscape = picturesData.filter((picture: PictureI) => picture.category === 'LANDSCAPE');
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