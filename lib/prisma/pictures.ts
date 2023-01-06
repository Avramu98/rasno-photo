import { CategoryName } from '@prisma/client';
import { prisma } from './index';

export async function getPictures() {
  try {
    const picturesData = await prisma.picture.findMany();
    return { picturesData };
  } catch (error) {
    return { error };
  }
}

export async function createPicture(imageUrl: string, title: string, description: string, category: CategoryName) {
  try {
    const pictureFromDb = await prisma.picture.create({
      data: {
        imageUrl,
        title,
        description,
        category,
      },
    });
    return { picture: pictureFromDb };
  } catch (error) {
    return { error };
  }
}

export async function updatePicture(id: string, title: string, description: string) {
  try {
    const updatedPicture = await prisma.picture.update({
      where: { id: id },
      data: {
        title,
        description,
      },
    });
    return { picture: updatedPicture };
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
