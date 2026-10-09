import { Project } from "../types/project";

export const cssProject: Project = {
  slug: "/CSS-Frameworks",
  focusArea: "01 / CSS Frameworks",
  title: "Beam",
  imageUrl: "/images/css-frameworks-preview.jpg",
  imageAlt: "Screenshot of the Beam project",
  description: "A social media platform for sharing and discovering images, built with HTML, Tailwind CSS and JavaScript. The platform features a responsive design and user authentication.",
  story:
    "This project was created as part of a course on CSS frameworks. The goal was to build a social media platform styled with a CSS framework. In this case, the framework used was Tailwind CSS. The project was built with HTML, Tailwind CSS and JavaScript, and features a responsive design and user authentication. The project was a great opportunity to learn about CSS frameworks and how to use them to build responsive and visually appealing web applications.\n\nThe authentication system allows users with a @stud.noroff.no email to register and log in to the platform. Once authenticated, users can create posts, search and filter posts. Currently the project is most of a static site, storing data in the browser's local storage. However, the project is designed to be easily integrated with a backend API in the future, allowing for dynamic data storage and retrieval.",
  accent: "from-amber-200 to-rose-100",
  liveUrl: "https://css-frameworks-course.netlify.app/",
  githubReadmeUrl: "https://github.com/Andy19955/CSS-Frameworks/blob/css-frameworks/README.md",
};

export const javascriptProject: Project = {
  slug: "/JavaScript-Frameworks",
  focusArea: "02 / JavaScript Frameworks",
  title: "The Online Store",
  imageUrl: "/images/javascript-frameworks-preview.jpg",
  imageAlt: "Screenshot of the Online Store project",
  description: "A modern online store built with React and Next.js, featuring a responsive design, product catalog and shopping cart functionality with checkout process.",
  story:
    "This project was created as part of a course on JavaScript frameworks. The goal was to build a modern online store using React and Next.js. The project features a responsive design, product catalog and shopping cart functionality with checkout process. The project was a great opportunity to learn about React and Next.js, and how to use them to build dynamic and interactive web applications.\n\nVisitors can browse products, add items to their card, edit the quantity of items in the cart, and proceed to checkout. The project's checkout process is a static form that does not submit data to a backend, but it is designed to be easily integrated with a backend API in the future, allowing for dynamic data storage and retrieval.",
  accent: "from-cyan-200 to-indigo-100",
  liveUrl: "https://javascript-frameworks.vercel.app/",
  githubReadmeUrl: "https://github.com/Andy19955/JavaScript-Frameworks/blob/master/README.md",
};

export const semesterProject: Project = {
  slug: "/Semester-Project-2",
  focusArea: "03 / Semester project",
  title: "The Auction Hub",
  imageUrl: "/images/semester-project-2-preview.jpg",
  imageAlt: "Screenshot of the Auction Hub project",
  description:
    "A modern online auction platform where users can discover rare treasures, place bids, and manage auction listings. The platform is built as a comprehensive web application with responsive design and user authentication.",
  story:
    "This project was created as part of the second semester project for the Frontend Development course. The goal was to build a modern online auction platform where users can discover rare treasures, place bids, and manage auction listings. The project was built with HTML, CSS and JavaScript, and features a responsive design and user authentication. The project was a great opportunity to learn about building comprehensive web applications and how to use HTML, CSS (Tailwind CSS) and JavaScript to create dynamic and interactive user experiences.\n\nThe authentication system allows users with a @stud.noroff.no email to register and log in to the platform. Once authenticated, users can create auction listings, place bids on items, and manage their own listings.",
  accent: "from-lime-200 to-teal-100",
  liveUrl: "https://theauctionhub.netlify.app/",
  githubReadmeUrl: "https://github.com/Andy19955/Semester-Project-2/blob/master/README.md",
};

export const projects: Project[] = [cssProject, javascriptProject, semesterProject];
