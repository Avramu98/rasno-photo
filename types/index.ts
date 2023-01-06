import { CategoryName } from '@prisma/client';

export interface PictureI {
  id: string;
  imageUrl: string;
  createdAt: string;
  title: string;
  fileName: string;
  description: string;
  category: CategoryName
}

export enum ModalTypeI {
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  CREATE = 'CREATE',
}

export enum OsTypeI {
  IOS = 'iOS',
  ANDROID = 'Android OS',
}