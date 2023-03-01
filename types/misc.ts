import { CategoryName } from '@prisma/client';
import { ReactElement, RefObject } from 'react';

import { ModalTypeI } from './context';

export interface PictureData {
  [key: string]: PictureI[]
}

export interface PictureI {
  id: string;
  imageUrl: string;
  createdAt: string;
  title: string;
  fileName: string;
  description: string;
  category: CategoryName
  size: { width: number, height: number }
}

export interface ModalI {
  picture: PictureI
  activeModal: ModalTypeI | null;
  closeModal: () => void;
  children?: ReactElement;
}

export enum SideType {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export interface AnimationWrapperI {
  children: ReactElement
  side?: SideType
}

export interface MobileMenuI {
  isOpen: boolean
  toggleOpen: any
}

export interface MailToI {
  email: string;
  subject: string;
  body: string;
  children: ReactElement
}