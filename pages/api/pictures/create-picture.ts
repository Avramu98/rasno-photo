import { NextApiRequest, NextApiResponse } from 'next';
import probe from 'probe-image-size';
import { getServerSession } from 'next-auth/next';

import { createPicture, getPictures } from '@/lib/prisma/pictures';

import { authOptions } from '../auth/[...nextauth]';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  try {
    if (session && session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
      const data = req.body;
      const { imageUrl, title, description, category } = data;
      const imageSize = await probe(imageUrl);
      const { error } = await createPicture(imageUrl, title, description, category, imageSize);
      if (error) { // @ts-ignore
        throw new Error(error);
      }
      const updatedData = await getPictures();

      return res.status(200).json({
        message: 'Successfully created data',
        updatedData: updatedData.picturesData,
      });
    } else {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

  } catch (error) {
    // @ts-ignore
    return res.status(500).json({ error: error.message });
  }

};

export default handler;