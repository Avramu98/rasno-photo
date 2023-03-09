import { CategoryName } from '@prisma/client';
import { groupBy } from 'lodash';

import { prisma } from './index';

export async function getPictures() {
  try {
    const data = await prisma.picture.findMany({
      select: {
        id: true,
        imageUrl: true,
        createdAt: false,
        title: true,
        description: true,
        category: true,
        size: true,
      },
    });
    const picturesData = groupBy(data, 'category');
    return { picturesData };
  } catch (error) {
    return { error };
  }
}

export async function getPicturesByCategory(page:any, limit:any, category:any) {
  try {
    const where = category ? { category } : {};
    const data = await prisma.picture.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: [
        { createdAt: 'desc' },
      ],
    });

    return { picturesData: data };
  } catch (error) {
    return { error };
  }
}

export async function createPicture(imageUrl: string, title: string, description: string, category: CategoryName, imageSize: any) {
  console.log('in create picture');
  try {
    const pictureFromDb = await prisma.picture.create({
      data: {
        imageUrl,
        title,
        description,
        category,
        size: { width: imageSize.width, height: imageSize.height },
      },
    });
    return { picture: pictureFromDb };
  } catch (error) {
    return { error };
  }
}

export async function updatePicture(id: string, title: string, description: string, category: CategoryName) {
  try {
    const updatedPicture = await prisma.picture.update({
      where: { id: id },
      data: {
        title,
        description,
        category,
      },
    });
    return { picture: updatedPicture };
  } catch (error) {
    return { error };
  }
}

export async function deletePicture(id: string) {
  try {
    await prisma.picture.delete({
      where: { id: id },
    });
  } catch (error) {
    return { error };
  }
}

export async function getPictureById(id: any) {
  try {
    const picture = await prisma.picture.findUnique({
      where: { id },
    });
    return { picture };
  } catch (error) {
    return { error };
  }
}
