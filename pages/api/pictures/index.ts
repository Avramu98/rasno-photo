import { getPictures } from '@/lib/prisma/pictures';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { picturesData, error } = await getPictures();
      if (error) { // @ts-ignore
        throw new Error(error);
      }
      return res.status(200).json({ picturesData });
    } catch (error) {
      // @ts-ignore
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT']);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;