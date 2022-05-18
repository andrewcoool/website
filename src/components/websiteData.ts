import { ProjectCardProps } from "./AllProjects/ProjectCard";
import { ContactProps } from "./Contact/Contact";
import { HighlightedProjectProps } from "./HighlightedProject/HighlightedProject";
import { JobsData } from "./Timeline/Timeline";
import collaborateCodePreview from "../resources/Collaborate Code Preview.png";
import cupetPreview from "../resources/Cupet Preview.png";

export const aboutText = `
I'm a second year Computer Science student entering my third year this September (2022). I've been coding for five years with a main focus on Python data visualization and analysis, as well as the Web. But I've also dabbled in Java, Android, and C through some personal projects listed in the sections below.

In my free time, I enjoy playing Counter-Strike: Global Offensive and biking. Usually anything is fun as long as it's with friends :)
`;

export const experiences = [
  {start: '2021-07-01', end: '2021-09-01', title: 'Software Intern', employer: 'Game of Apps', points:
   ['Created a registration system using React, allowing students to register for the Game of Apps program online; eliminated admin overhead by handling student data programmatically',
  'Integrated online payments with Braintree API with Node.js Express and Heroku',
  'Documented the Game of Apps website and server codebase, improving its readability',
]},
  {start: '2020-06-29', end: '2020-09-01', title: 'Development Support', employer: 'Electronic Arts', points:
  ['Worked in teams to test, document, and track bugs in the FIFA 21 video game',
    'Aided in onboarding new hires'
]},
  {start: '2020-09-01', end: '2022-05-04', title: 'Computer Science', employer: 'University of Toronto', points:
  ['Honours BSc Computer Science Specialist and Mathematics Minor', "GPA: 3.89/4.00. University of Toronto Scholars Award", 'Relevant Coursework: Data Structures & Algorithms, Foundations of Computer Science, Enriched Introduction to the Theory of Computation, Software Design, Software Tools, Multivariable Calculus, Linear Algebra, Probability and Statistics'], isEducation: true},
] as JobsData;

export const highlightedProject1 = {
  title: "Collaborate Code",
  description: `A collaborative text-editor that synchronizes across multiple devices. Inspired by Google Docs.
  `,
  technologies: ["Python", "JS", "Flask", "HTML & CSS"],
  clickUrl: "https://github.com/andrewcoool/collaborate-code",
  imgUrl: collaborateCodePreview,
} as HighlightedProjectProps;

export const highlightedProject2 = {
  title: "Cupet",
  description: "An Android app that allows pet owners to connect by matching their pets together in a Tinder-like system.",
  technologies: ["Java", "Android", "Java Spring", "MySQL"],
  clickUrl: "https://github.com/andrewcoool/cupet-backend",
  imgUrl: cupetPreview,
} as HighlightedProjectProps;

export const allProjects = [
  {
    title: "Rise Up Bot",
    description: `A Discord bot for scheduling gaming sessions. Organizes the game played and time, reminding participants at the scheduled time.
    `,
    clickUrl: "https://github.com/andrewcoool/rise-up-bot",
    technologies: ["Python"]
  },
  {
    title: "Spotify Song Analytics",
    description: `An program that finds the distinguishing traits of a Spotify playlist using Graphs. Using this data, the program recommends similar songs.
    `,
    clickUrl: "https://github.com/andrewcoool/spotify-data-analytics",
    technologies: ["Python", "Plot.ly", "PyQt5"]
  },
  {
    title: "Wildfire Visualizer",
    description: "A visualization tool that retrieves the wildfires in the US from an SQLite database and plots them on a map.",
    clickUrl: "https://github.com/eamonma/mario",
    technologies: ["Python", "NumPy", "Pygame"]
  },
  {
    title: "Collaborate Code",
    description: "A collaborative text-editor that synchronizes across multiple devices. Inspired by Google Docs.",
    clickUrl: "https://github.com/andrewcoool/collaborate-code",
    technologies: ["Python", "JS", "Flask", "HTML & CSS"]
  },
  {
    title: "Cupet",
    description: "An Android app that allows pet owners to connect by matching their pets together in a Tinder-like system.",
    clickUrl: "https://github.com/andrewcoool/cupet-backend",
    technologies: ["Java", "Android", "Spring"]
  },
  {
    title: "Personal Website",
    description: "You're looking at it!",
    clickUrl: "https://github.com/andrewcoool/website",
    technologies: ["React", "TypeScript"]
  },
] as ProjectCardProps[];

export const contact = {
  email: "andrewq.qiu@mail.utoronto.ca",
  github: {
    name: "@andrewcoool",
    url: "https://github.com/andrewcoool/"
  }
} as ContactProps;