import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  postgres,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  hackreactor,
  tesla,
  worldwide,
  shopify,
  atelier,
  mvp,
  MillyScreenshot,
  threejs,
  logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
  {
    title: "Music Producer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgres
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Bootcamp Projects",
    company_name: "Hack Reactor",
    icon: hackreactor,
    iconBg: "#E6DEDD",
    date: "December 2020 - March 2021",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Exercised teamwork and delegation skills while working with a team of software engineers to build out applications for clients",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "March 2021 - June 2021",
    points: [
      "Acquired customers and planned websites tailored to their individual needs.",
      "Created new websites utilizing the most current cutting-edge client-side technology.",
      "Effectively communicated with clients to ensure their vision comes to fruition.",
      "Upgraded outdated websites into sleeker, well-polished websites that place an emphasis on user experience."
    ],
  },
  {
    title: "Fullstack Software Engineer",
    company_name: "Worldwide Interactive Services",
    icon: worldwide,
    iconBg: "#FFFFFF",
    date: "June 2021 - Present",
    points: [
      "Collaborated with software engineers, designers, and QA to build out applications for clients",
      "Utilized Agile Methodology in order to ensure efficient workflow between teams",
      "Created web applications alongside mobile applications for various financial corporations"
    ]
  }

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Milly Online Banking",
    description:
      "Milly is a template-syle SPA that establishes secure connections with Financial Institution cores for the seamless transfer of funds.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: MillyScreenshot,
    source_code_link: "https://w-w-i-s.com/milly",
  },
  {
    name: "Playlists for Producers",
    description:
      "Web application that utilizes Spotify OAuth and API. Once setlists are created, an algorithm grades transitions between songs and allows users to edit and export to Spotify",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: mvp,
    source_code_link: "https://github.com/JaredFunaro/PlaylistsForProducers",
  },
  {
    name: "Atelier Shopping",
    description:
      "Web-based e-commerce platform that allows users to search, edit, and add products to their shopping cart from an API that I designed and hosted on AWS",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: atelier,
    source_code_link: "https://github.com/rfe2212-Scarlet-Witch/FEC2212",
  },
];

export { services, technologies, experiences, testimonials, projects };