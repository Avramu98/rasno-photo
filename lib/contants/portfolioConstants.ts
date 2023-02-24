import { CategoryName } from '@prisma/client';

export interface CategoriesNavI {
  id: number;
  title: string;
  categoryName: CategoryName | string
}

export const categoriesNav: CategoriesNavI[] = [
  {
    id: 0,
    title: 'Toate',
    categoryName: 'allCategories',
  },
  {
    id: 1,
    title: 'Evenimente',
    categoryName: CategoryName.EVENTS,
  },
  {
    id: 2,
    title: 'Natură',
    categoryName: CategoryName.NATURE,
  },
  {
    id: 3,
    title: 'Sessions',
    categoryName: CategoryName.SESSIONS,
  },
  {
    id: 4,
    title: 'Street',
    categoryName: CategoryName.STREET,
  },
];