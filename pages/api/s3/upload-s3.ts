import { NextApiRequest, NextApiResponse } from 'next';

import { uploadPictureToS3 } from '@/lib/prisma/s3';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.method === 'POST') {
    try {
      let { filePath, type } = req.body;
      const { url } = await uploadPictureToS3(filePath, type);
      res.status(200).json({ url });

    } catch (err) {
      res.status(400).json({ message: err });
    }
  }


};