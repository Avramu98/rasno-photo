import { NextApiRequest, NextApiResponse } from 'next';

import { getPicturesByCategory } from '@/lib/prisma/pictures';

const handler = async (req:NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { category, page = 1, limit = 5 } = req.query;
      const { picturesData, error } = await getPicturesByCategory(page, limit, category);
      if (error) { // @ts-ignore
        throw new Error(error);
      }
      return res.status(200).json({ picturesData });
    } catch (error) {
      // @ts-ignore
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET']);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;