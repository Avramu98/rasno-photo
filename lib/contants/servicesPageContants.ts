import { ServiceI } from '../../types/servicePage';

export const services: ServiceI[] = [
  {
    id: 0,
    title: 'Sessions',
    picture: {
      landscape: '/static/sessions-landscape.webp',
      mobile: '/static/session-mobile.webp',
    },
    options: `
    🔶 Capturing the beauty and personality of the subject /
🔶 Using lighting and composition to create dramatic and appealing images /
🔶 Customized photo sessions to fit the client's needs and desires /
🔶 Ability to photograph in various locations, such as outdoors or in a studio /
🔶 Final delivery of images in different formats, such as prints or digital files /`,
  },
  {
    id: 1,
    title: 'Nature',
    picture: {
      landscape: '/static/nature-landscape.jpg',
    },
    options: `
   🔶 Capturing the beauty and diversity of nature /
🔶 Using photography techniques to capture the details and textures of nature /
🔶 Ability to photograph in various weather conditions and times of the day /
🔶 Customized photo sessions to fit the client's needs and desires /
🔶 Final delivery of images in different formats, such as prints or digital files /`,
  },
  {
    id: 2,
    title: 'Events',
    picture: {
      landscape: '/static/event-landscape.webp',
    },
    options: `
    🔶 Capturing key moments and the atmosphere of the event /
🔶 Using photography techniques to capture the details and action of the event /
🔶 Ability to photograph various types of events, such as weddings, parties, product launches, or press conferences /
🔶 Customized photo sessions to fit the client's needs and desires /
🔶 Final delivery of images in different formats, such as prints or digital files /`,
  },
  {
    id: 3,
    title: 'Street',
    picture: {
      landscape: '/static/street-landscape.webp',
      mobile: '/static/street-mobile.webp',
    },
    options: `
   🔶 Capturing everyday life and details around us /
🔶 Using photography techniques to capture action and movement /
🔶 Ability to photograph in various cities or locations /
🔶 Customized photo sessions to fit the client's needs and desires /
🔶 Final delivery of images in different formats, such as prints or digital files /
`,
  },
];