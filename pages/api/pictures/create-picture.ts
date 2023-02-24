import { NextApiRequest, NextApiResponse } from 'next';
import probe from 'probe-image-size';

import { createPicture, getPictures } from '@/lib/prisma/pictures';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const data = req.body;
    const { imageUrl, title, description, category } = data;
    const imageSize = await probe(imageUrl);
    console.log(imageSize);
    const { error } = await createPicture(imageUrl, title, description, category, imageSize);
    if (error) { // @ts-ignore
      throw new Error(error);
    }
    const updatedData = await getPictures();

    return res.status(200).json({
      message: 'Successfully created data',
      updatedData: updatedData.picturesData,
    });
  } catch (error) {
    // @ts-ignore
    return res.status(500).json({ error: error.message });
  }

};

export default handler;