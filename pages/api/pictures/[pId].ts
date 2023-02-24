import { NextApiRequest, NextApiResponse } from 'next';

import { deletePicture, updatePicture, getPictures } from '@/lib/prisma/pictures';
import { deletePictureFromS3 } from '@/lib/prisma/s3';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pId } = req.query as { pId: string };

  switch (req.method) {
    case 'DELETE': {
      try {
        let { pictureName } = req.body;
        await Promise.all([
          deletePictureFromS3(pictureName),
          deletePicture(pId),
        ]);

        const updatedData = await getPictures();

        return res.status(200).json({
          message: 'Successfully deleted picture',
          updatedData: updatedData.picturesData,
        });
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
    case 'PUT': {
      try {
        const data = req.body;
        const { title, description, category } = data;
        const { error } = await updatePicture(pId, title, description, category);
        if (error) {
          // @ts-ignore
          throw new Error(error);
        }
        const updatedData = await getPictures();

        return res.status(200).json({
          message: 'Successfully edited data',
          updatedData: updatedData.picturesData,
        });
      } catch (error) {
        return res.status(500).json({ error });
      }
    }
  }

};

export default handler;