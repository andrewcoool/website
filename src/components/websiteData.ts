import { ProjectCardProps } from "./AllProjects/ProjectCard";
import { ContactProps } from "./Contact/Contact";
import { HighlightedProjectProps } from "./HighlightedProject/HighlightedProject";
import { Experiences } from "./Timeline/Timeline";
import collaborateCodePreview from "../resources/Collaborate Code Preview.png";
import cupetPreview from "../resources/Cupet Preview.png";

export const aboutText = `I'm a fourth year Computer Science student. I've been coding for six years with a speciality in Python, C, Java, and JavaScript/TypeScript. My main interests are in machine learning and code efficiency.

In my free time, I enjoy playing Counter-Strike: Global Offensive, volleyball, and badminton. Usually anything is fun as long as it's with friends :)
`;

export const experiences = [
  {start: '2023-09-01', end: '2023-12-31', title: 'Research Assistant', employer: 'University of Toronto', points: 
  ['Design a machine learning classifier in PyTorch and Python to determine the source camera of a photo, by identifying and applying the intrinsic blur signatures of cameras']},
  {start: '2023-05-22', end: '2023-08-11', title: 'SWE Intern', employer: 'PayPal', points: 
  ['Enhanced various aspects of Hyperwallet to support cash advance funding using Java and MySQL',
  'Supported debugging live issues in production. One such fix regarding parsing errors alleviated 500 failed transactions weekly',
  'Collaborated in creating documentation and learning materials for the Hyperwallet codebase',
  'Oversaw onboarding for a new developer, reducing blockage']},
  {start: '2021-07-01', end: '2021-09-01', title: 'Web Developer Intern', employer: 'Game of Apps', points:
  ['Developed an online registration form using React, boosting registrations by 72%',
  'Integrated online payments with the Braintree payments platform using Node.js Express',
  'Overhauled the documentation of the codebase, improving its maintainability',
  'Coordinated integration testing between software teams'
]},
  {start: '2020-06-29', end: '2020-09-01', title: 'Development Support', employer: 'Electronic Arts', points:
  ['Tested, documented, and tracked bugs in the FIFA 21 video game',
    'Aided in onboarding new hires'
]},
  {start: '2020-09-01', end: '2025-05-01', title: 'Computer Science', employer: 'University of Toronto', points:
  ['Honours BSc Computer Science Specialist and Mathematics Minor',
   "GPA: 3.93/4.00. University of Toronto Scholars Award",
  'Relevant Coursework: Algo Design & Analysis, Machine Learning, Artificial Intelligence, Parallel Programming, Operating Systems, Databases, Software Design, Software Tools, Multivariable Calculus, Linear Algebra, Probability and Statistics'], isEducation: true},
] as Experiences;

export const highlightedProject1 = {
  title: "Collaborate Code",
  description: `A collaborative text-editor that synchronizes across multiple devices. Inspired by Google Docs.
  `,
  technologies: ["Python", "JS", "Flask", "HTML & CSS"],
  clickUrl: "https://github.com/andrewq-qiu/collaborate-code",
  imgUrl: collaborateCodePreview,
} as HighlightedProjectProps;

export const highlightedProject2 = {
  title: "Cupet",
  description: "Social networking platform for matching pet owners. Inspired by Tinder.",
  technologies: ["Java", "Android", "Java Spring", "SQL"],
  clickUrl: "https://github.com/andrewq-qiu/cupet-backend",
  imgUrl: cupetPreview,
} as HighlightedProjectProps;

export const allProjects = [
  {
    title: "Rise Up Bot",
    description: `A Discord chatbot for scheduling gaming sessions. Organizes the game played and time, reminding participants at the scheduled time.
    `,
    clickUrl: "https://github.com/andrewq-qiu/rise-up-bot",
    technologies: ["Python"]
  },
  {
    title: "Spotify Song Analytics",
    description: `A program that finds the distinguishing traits of a Spotify playlist using Graphs. Using this data, the program recommends similar songs.
    `,
    clickUrl: "https://github.com/andrewq-qiu/spotify-data-analytics",
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
    clickUrl: "https://github.com/andrewq-qiu/collaborate-code",
    technologies: ["Python", "JS", "Flask", "HTML & CSS"]
  },
  {
    title: "Cupet",
    description: "An Android app that allows pet owners to connect by matching their pets together in a Tinder-like system.",
    clickUrl: "https://github.com/andrewq-qiu/cupet-backend",
    technologies: ["Java", "Android", "Spring"]
  },
  {
    title: "Personal Website",
    description: "You're looking at it!",
    clickUrl: "https://github.com/andrewq-qiu/website",
    technologies: ["React", "TypeScript"]
  },
] as ProjectCardProps[];

export const contact = {
  email: "andrewqiu9774@gmail.com",
  github: {
    name: "@andrewq-qiu",
    url: "https://github.com/andrewq-qiu"
  }
} as ContactProps;
