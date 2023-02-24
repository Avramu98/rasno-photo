import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
// import axios from 'axios';
// import { useRouter } from 'next/router';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Introduction from '@/components/portfolioPage/Introduction';
// import GalleryBrowser from '@/components/portfolioPage/GalleryBrowser';

import { PictureData } from '../types/misc';


// export async function getStaticProps() {
//   // const pictures = await axios.get('http://192.168.1.181:3000/api/pictures/get-pictures');
//   // const data = await axios.get('/api/pictures/get-pictures');
//   // const data = pictures?.data;
//
//   return {
//     props: { picturesData: data?.data.picturesData },
//   };
// }

const Portfolio = ({ picturesData }: { picturesData: PictureData }) => {
  // const router = useRouter();
  console.log(picturesData);
  // const { pickedCategoryFromLandingPage } = router.query;

  return (
        <div className='text-white'>
            <Head>
                <title>Portofoliu</title>
                <meta name="description" content="Portfolio page of RasnoPH"/>
            </Head>
            <Box className='min-h-screen'>
                <Navbar/>
                <Introduction/>
                {/*<GalleryBrowser pickedCategoryFromLandingPage={pickedCategoryFromLandingPage}*/}
                {/*                picturesData={picturesData}/>*/}
            </Box>
            <Footer/>
        </div>
  );
};

export default Portfolio;