import { CategoryName } from '@prisma/client';

export interface CategoriesNavI {
  id: number;
  title: string;
  categoryName: CategoryName | string
}

export const categoriesNav: CategoriesNavI[] = [
  {
    id: 0,
    title: 'All',
    categoryName: '',
  },

  {
    id: 1,
    title: 'Nature',
    categoryName: CategoryName.NATURE,
  },
  {
    id: 2,
    title: 'Events',
    categoryName: CategoryName.EVENTS,
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