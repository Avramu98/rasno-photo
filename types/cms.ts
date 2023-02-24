import { CategoryName } from '@prisma/client';

import { PictureI } from './misc';

export interface CmsContextI {
  isSpecificLargeSwiperToggled: {
    [key: string]: boolean
  },
  toggleSwiper: (categoryName: CategoryName) => void;
  mutate: any;
  setCurrentPicture: (newState: PictureI | null) => void;
}

export interface PictureDividerI {
  categoryName: CategoryName
}

export interface SwiperContainerI {
  pictures: PictureI[];
  categoryName: CategoryName
}

export enum FieldType {
  DESCRIPTION = 'description',
  TITLE = 'title',
  CATEGORY = 'category',
}

export interface UploadDataI {
  description?: string
  category: CategoryName
  title?: string
}