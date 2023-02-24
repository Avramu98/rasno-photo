import { CategoryName } from '@prisma/client';

import { CategoryItemsI, NavigationItemsI, TestimonialItemsI } from '../../types/landingPage';

export const navigationItems: NavigationItemsI[] = [
  {
    id: 1,
    name: 'Acasă',
    redirectTo: '/',
  },
  {
    id: 2,
    name: 'Servicii',
    redirectTo: '/services',
  },
  {
    id: 3,
    name: 'Portofoliu',
    redirectTo: '/portfolio',
  },
  {
    id: 4,
    name: 'Despre',
    redirectTo: '/about',
  },
  {
    id: 5,
    name: 'Contact',
    redirectTo: '/contact',
  },
];

export const categoryItems: CategoryItemsI[] = [
  {
    id: 1,
    imageUrl: '/static/event.webp',
    title: 'Evenimente',
    categoryName: CategoryName.EVENTS,
  },
  {
    id: 2,
    imageUrl: '/static/nature.jpg',
    title: 'Natură',
    categoryName: CategoryName.NATURE,
  },
  {
    id: 3,
    imageUrl: '/static/street.webp',
    title: 'Street',
    categoryName: CategoryName.STREET,
  },
  {
    id: 4,
    imageUrl: '/static/session.webp',
    title: 'Sessions',
    categoryName: CategoryName.SESSIONS,
  },
];

export const testimonialItems: TestimonialItemsI[] = [
  {
    id: 1,
    message: 'Râșno a făcut o treabă excelentă cu pozele de la cununia noastră. Ne-a prins emoțiile într-un mod natural și am fost foarte mulțumiți de rezultat. Îl recomandăm cu încredere tuturor celor care caută un fotograf talentat.',
    name: 'Avram Vlad',
  },
  {
    id: 2,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula justo. Maecenas sed orci dignissim, auctor augue sit amet.',
    name: 'John Doe',
  },
  {
    id: 3,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula justo. Maecenas sed orci dignissim, auctor augue sit amet.',
    name: 'Jane Doe',
  },
  {
    id: 4,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula justo. Maecenas sed orci dignissim, auctor augue sit amet.',
    name: 'Jane Doe',
  },
];