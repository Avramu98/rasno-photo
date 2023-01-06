import { NextApiRequest, NextApiResponse } from 'next';
import { createPicture } from '@/lib/prisma/pictures';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body;
    const { imageUrl, title, description, category } = data;
    const { picture, error } = await createPicture(imageUrl, title, description, category);
    if (error) { // @ts-ignore
      throw new Error(error);
    }
    return res.status(200).json({ picture });
  } catch (error) {
    // @ts-ignore
    return res.status(500).json({ error: error.message });
  }
};

export default handler;