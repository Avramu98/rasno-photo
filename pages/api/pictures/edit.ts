import { NextApiRequest, NextApiResponse } from 'next';
import { updatePicture } from '@/lib/prisma/pictures';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body;
    const { id, title, description } = data;
    const { picture, error } = await updatePicture(id, title, description);
    if (error) {
      // @ts-ignore
      throw new Error(error);
    }
    return res.status(200).json({ picture });
  } catch (error) {
    // @ts-ignore
    return res.status(500).json({ error: error.message });
  }
};

export default handler;