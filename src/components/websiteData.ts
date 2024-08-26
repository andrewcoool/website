import { ProjectCardProps } from "./AllProjects/ProjectCard";
import { ContactProps } from "./Contact/Contact";
import { HighlightedProjectProps } from "./HighlightedProject/HighlightedProject";
import { Experiences } from "./Timeline/Timeline";
import winProbabilitiesPreview from "../resources/CS2 Win Probabilities Preview.png";
import cupetPreview from "../resources/Cupet Preview.png";

export const aboutText = `I'm a fourth year Computer Science student. I've been coding for seven years with a speciality in Python, C/C++, Java, and JavaScript/TypeScript. My main interests are in machine learning and code efficiency.

In my free time, I enjoy cooking and playing CS2, volleyball, and badminton.
`;

export const experiences = [
  {start: '2024-09-01', end: '2024-12-31', title: 'ML Intern', employer: 'Pinterest', points: 
    ['In progress']},
  {start: '2023-09-01', end: '2024-12-31', title: 'Research', employer: 'University of Toronto', points: 
  ['(Project 1) Employ implicit neural representations of camera blur for cell phone device forensics',
   '(Project 2) Construct deep learning reconstruction pipelines for Coded Hyperspectral Imaging',
   '(Project 3) Apply monocular depth estimation for human-robot locomotion on staircases',
   'Associated with Dynamic Graphics Project (DGP) Lab, Computational Health and Interaction (CHAI) Lab, Neural Robotics Lab']},
  {start: '2023-05-22', end: '2023-08-11', title: 'SWE Intern', employer: 'PayPal', points: 
  ['Enhanced various aspects of Hyperwallet to support cash advance funding using Java and MySQL',
  'Debugged live issues in production, alleviating 500 failed transactions weekly',
  'Refactored existing code using design patterns and OOP principles, improving maintainability',
  'Collaborated in creating documentation and learning materials for the Hyperwallet codebase']},
  {start: '2021-07-01', end: '2021-09-01', title: 'Web Dev Intern', employer: 'Game of Apps', points:
  ['Developed an online registration form using React, boosting registrations by 72%',
  'Integrated online payments with the Braintree payments platform using Node.js Express',
  'Overhauled the documentation of the codebase, improving its maintainability',
  'Coordinated integration testing between software teams'
]},
  {start: '2020-09-01', end: '2025-05-01', title: 'Computer Science', employer: 'University of Toronto', points:
  ['Honours BSc Computer Science Specialist and Mathematics Minor',
   "GPA: 3.94/4.00. University of Toronto Scholars Award",
  'Coursework: Neural Networks, Image Understanding, NLP, Machine Learning, Artificial Intelligence, Parallel Programming, Operating Systems, Databases, Software Design, Software Tools, Multivariable Calculus, Linear Algebra, Probability and Statistics'], isEducation: true},
] as Experiences;

export const highlightedProject1 = {
  title: "CS2 Win Probabilities",
  description: `Using ML to predict CS2 round win probabilities given the current game state.
  `,
  technologies: ["Python", "PyTorch"],
  clickUrl: "https://github.com/andrewq-qiu/cs2-win-probabilities",
  imgUrl: winProbabilitiesPreview,
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
    title: "CS2 White Elephant",
    description: `A webapp implementing white elephant with CS2 items.
    `,
    clickUrl: "https://github.com/andrewq-qiu/cs2-white-elephant",
    technologies: ["React", "TypeScript", "Sockets"]
  },
  {
    title: "CS2 Win Probabiliies",
    description: `Using ML to predict CS2 round win probabilities given the current game state.
    `,
    clickUrl: "https://github.com/andrewq-qiu/cs2-win-probabilities",
    technologies: ["Python", "PyTorch"]
  },
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
  linkedin: {
    name: "@andrew-qiu",
    url: "https://www.linkedin.com/in/andrew-qiu/"
  },
  github: {
    name: "@andrewq-qiu",
    url: "https://github.com/andrewq-qiu"
  }
} as ContactProps;
