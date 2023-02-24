//USE SWR

import axios from 'axios';
import useSWR from 'swr';

const fetcher = async () => {
  const data = await axios.get('./api/pictures');
  return {
    picturesData: data.data.picturesData,
  };
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const { data } = useSWR('photos', fetcher);


//staticProps

export async function getServerSideProps() {
  const pictures = await axios.get('http://localhost:3000/api/pictures');
  const data = pictures.data;

  return {
    props: { picturesData: data.picturesData },
  };
}