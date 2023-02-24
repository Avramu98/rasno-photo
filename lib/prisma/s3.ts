import S3 from 'aws-sdk/clients/s3';

const s3 = new S3({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: 'v4',
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export async function uploadPictureToS3(filePath: string, fileType: string) {
  const fileParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: filePath,
    Expires: 600,
    ContentType: fileType,
  };

  const url = await s3.getSignedUrlPromise('putObject', fileParams);
  return { url };
}

export async function deletePictureFromS3(pictureName: string) {
  const fileParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: pictureName,
  };
    // @ts-ignore
  const data = await s3.deleteObject(fileParams).promise();
  return { data };
}