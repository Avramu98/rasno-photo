import { CategoryName } from '@prisma/client';

import { CategoryItemsI, NavigationItemsI, TestimonialDataI } from '../../types/landingPage';

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
    title: 'Natură',
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
    title: 'Evenimente',
    categoryName: CategoryName.EVENTS,
  },
];

export const testimonialsData: TestimonialDataI[] = [
  {
    id: 1,
    message: 'Am lucrat împreună timp de 5 ani și încă continuăm colaborarea. Un fotograf foarte pasionat. De fiecare dată a fost foarte proactiv în legătură cu cerințele proiectului în care lucra. Foarte adaptabil, profesionist, prompt și capabil pentru volum.',
    name: 'Tanțoș Mihai',
  },
  {
    id: 2,
    message: 'Râșno a făcut o treabă excelentă cu pozele de la cununia noastră. Ne-a prins emoțiile într-un mod natural și am fost foarte mulțumiți de rezultat. Îl recomandăm cu încredere tuturor celor care caută un fotograf talentat.',
    name: 'Avram Vlad',
  },
  {
    id: 3,
    message: 'Pozele sunt făcute într-un mod exemplar și foarte pe placul meu. Totul a mers perfect, pozele sunt foarte frumoase.',
    name: 'Aurora Crețan',
  },
  {
    id: 4,
    message: 'Un fotograf de excepție care da dovadă de profesionalism! Tratează fiecare ședința cu seriozitate și este foarte bun în ceea ce face.',
    name: 'Bogdan Mitrache',
  },
  {
    id: 5,
    message: 'Țin să îți mulțumesc mult pentru poze, sunt super. Cu siguranță vom mai colabora.',
    name: 'Victor Necșoiu',
  },
  {
    id: 6,
    message: 'Un fotograf bun cu idei inventive care trimite pozele la timp și într-un mod exemplar.',
    name: 'Cosmin Albu',
  },
];