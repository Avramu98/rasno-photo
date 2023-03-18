# RasnoPH

Welcome! This personal project offers a seamless experience for both photographers and users alike.

The platform is equipped with a user-friendly Content Management System (CMS) that allows photographers to easily upload, edit, and delete their content.

For users, the website features a stunning landing page that includes a featured portfolio section, an "About" page that provides more information about the photographer and their work. A "Contact" page that allows users to get in touch with the photographer directly. A "Services" page where the photographer can showcase the services that he offers to the clients. In addition, the portfolio page is designed to showcase the photographer's best work, so that users can easily browse and find the photos that speak to them. 

The website can be visited here <a href="https://www.rasno-photo.ro" target="_blank">Rasno Photography</a>

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [License](#license)
- [Contact](#contact)

## Technologies Used

<ul>
  <li>NextJS - a popular React framework for building fast and scalable web applications.</li>
  <li>Typescript - a typed superset of JavaScript that helps catch errors and improve code maintainability.</li>
  <li>Tailwind CSS - a utility-first CSS framework that helps streamline the design process by providing pre-built styles and components.</li>
  <li>Material UI - a popular React component library that provides a wide range of customizable and reusable UI components, making it easy to build beautiful and functional user interfaces.</li>
  <li>S3 - Amazon's cloud storage service, used for efficient and scalable storage of files such as images and videos.</li>
  <li>Prisma - a type-safe database ORM that makes it easy to interact with databases using a modern and intuitive API.</li>
  <li>MongoDB - a NoSQL document database used for storing and managing structured data.</li>

</ul>

## Features
  <h4> Content Management System (CMS) for content upload, edit, and delete. </h4>

  <h4> Contains the following pages </h4>
  <ul>
  <li>Landing page with featured portfolio categories/testimonials/review </li>
  <li>About page </li>
  <li>Contact page -> Integrated WhatsApp and contact form that send email to the owner</li>
  <li>Portfolio page -> Lazy loaded pictures with pagination via API </li>
  <li>Services page </li>
  </ul>
  
   <h4> Responsive design </h4>
  <p>Website works pretty much on any resolution a key feature being the use of the user agent for mobile detection</p>
  
  <h4> S3 Integration </h4>
  <p>Integrated with Amazon S3 to make managing and storing your files easier than ever before. With S3, you'll be able to easily upload and store all of your photos, videos, and other files directly from our website.</p>


  <h4> SSR with API routes </h4>
<p>Includes Server-Side Rendering (SSR) with API routes to help ensure fast and responsive performance. With our SSR setup, your website will load quickly and smoothly, even with a large portfolio or lots of content.</p>

  <h4> Dark/Light mode </h4>
<p>Integrated using next/themes available in every page via navbar</p>

 <h4> Animations </h4>
<p>Framer motion was the core of the animations used in the app</p>

 <h4> Contact form </h4>
<p>Implemented using @emailjs/browser</p>

## Screenshots

<h3> Landing Page </h3>
<table>
  <tr>
  <td>
    <h4>Web</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226123651-64d2d369-d1b7-4603-8678-41ff1b85308b.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226123811-f7b5481e-a68e-4d86-8cb5-b1cb78e10a02.png">
  </td>
  </tr>

  <tr>
  <td>
    <h4>Web</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226123917-29a76b0b-88aa-474b-890a-23c8f704c3d7.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226123945-8a7af1cc-abe5-4526-b481-29b57a401687.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226123958-a2cfcdd5-08df-4008-ae76-e54cce08fd63.png">
  </td>
  </tr>
</table>

<h3> Services Page </h3>
<table>
  <tr>
  <td>
    <h4>Web</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226124254-000c8b35-19eb-4f71-905a-b542b3b7677b.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226124278-09c80759-05f8-4590-8b9d-f4e2bbf5ddcd.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226124293-dd913778-5ceb-4497-92e4-61baa8d67a19.png">
  </td>
  </tr>
</table>

<h3> Portfolio Page </h3>
<table>
  <tr>
  <td>
    <h4>Web</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226124455-00fde233-285f-46a1-a8bd-f51ecc3a101a.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226124478-79f9ca43-624f-4c53-b003-71666d2cdb81.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226124484-47fb7680-68e8-48bd-842c-92c6a596f32d.png">
  </td>
  </tr>
  <tr>
    <td>
      <h4>Web lightbox preview</h4>
      <img src="https://user-images.githubusercontent.com/49161699/226124538-74b5023e-cd0a-4c22-bef4-85d6b2d35bc0.png"
    </td>
  </tr>
</table>

<h3> About Page </h3>
<table>
  <tr>
  <td>
    <h4>Web</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226124769-e90121a2-f22b-4720-9816-068346c74062.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226124924-81a93166-b363-419d-b0af-c87c087099f4.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226125081-314fb0d1-f16f-4266-957b-8736b18cf424.png">
  </td>
  </tr>
</table>

<h3> Contact Page </h3>
<table>
  <tr>
  <td>
    <h4>Web</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226125687-c131b2ae-bed5-4ad2-afa2-7b32f0f5a82b.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226125722-98f8e1a3-2bea-46ab-895e-c15188df3b03.png">
  </td>
  <td>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/49161699/226125736-44c6fde4-9372-4325-9259-12dadbd7f72a.png">
  </td>
  </tr>
</table>

## License
All rights reserved

## Contact
avram.vlad9@gmail.com
