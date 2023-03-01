import { CategoryName } from '@prisma/client';

export interface NavigationItemsI {
  id: number;
  name: string;
  redirectTo: string;
}

export interface NavItemI {
  name: string;
  redirectLink: string;
}

export interface CategoryItemsI {
  id: number;
  picture: {
    landscape: string;
    mobile?:string;
  }
  title: string;
  categoryName: CategoryName
}

export interface TestimonialDataI {
  id: number;
  message: string;
  name: string;
}