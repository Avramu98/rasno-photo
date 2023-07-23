import { CategoryName } from '@prisma/client';

import { CategoryItemsI, NavigationItemsI, TestimonialDataI } from '../../types/landingPage';

export const navigationItems: NavigationItemsI[] = [
  {
    id: 1,
    name: 'Home',
    redirectTo: '/',
  },
  {
    id: 2,
    name: 'Services',
    redirectTo: '/services',
  },
  {
    id: 3,
    name: 'Portfolio',
    redirectTo: '/portfolio',
  },
  {
    id: 4,
    name: 'About',
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
    picture: {
      landscape: '/static/sessions-landscape.webp',
      mobile: '/static/session-mobile.webp',
    },
    title: 'Sessions',
    categoryName: CategoryName.SESSIONS,
  },
  {
    id: 2,
    picture: {
      landscape: '/static/nature-landscape.jpg',
    },
    title: 'Nature',
    categoryName: CategoryName.NATURE,
  },
  {
    id: 3,
    picture: {
      landscape: '/static/street-landscape.webp',
      mobile: '/static/street-mobile.webp',
    },
    title: 'Street',
    categoryName: CategoryName.STREET,
  },
  {
    id: 4,
    picture: {
      landscape: '/static/event-landscape.webp',
    },
    title: 'Events',
    categoryName: CategoryName.EVENTS,
  },
];

export const testimonialsData: TestimonialDataI[] = [
  {
    id: 1,
    message: 'We have worked together for 5 years, and we still continue our collaboration. He is a very passionate photographer. Every time, he has been extremely proactive regarding the project requirements. He is highly adaptable, professional, prompt, and capable of handling a large volume of work.',
    name: 'Tanțoș Mihai',
  },
  {
    id: 2,
    message: 'Râșno did an excellent job with the photos from our wedding. He captured our emotions in a natural way, and we were extremely pleased with the results. We wholeheartedly recommend him to anyone in search of a talented photographer.',
    name: 'Avram Vlad',
  },
  {
    id: 3,
    message: 'The photos are done in an exemplary manner and are very much to my liking. Everything went perfectly, and the pictures are exceptionally beautiful.',
    name: 'Aurora Crețan',
  },
  {
    id: 4,
    message: 'An exceptional photographer who demonstrates professionalism! He approaches every session with seriousness and is highly skilled at what he does.',
    name: 'Bogdan Mitrache',
  },
  {
    id: 5,
    message: 'I want to thank you very much for the photos, they are great. We will definitely collaborate again.',
    name: 'Victor Necșoiu',
  },
  {
    id: 6,
    message: 'A good photographer with inventive ideas who delivers the photos on time and in an exemplary manner',
    name: 'Cosmin Albu',
  },
];