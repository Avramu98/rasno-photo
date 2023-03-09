import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

import { uploadPictureToS3 } from '@/lib/prisma/s3';

import { authOptions } from '../auth/[...nextauth]';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (session && session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
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
  } else {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }


};