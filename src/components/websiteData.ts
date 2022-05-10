import { ProjectCardProps } from "./AllProjects/ProjectCard";
import { ContactProps } from "./Contact/Contact";
import { HighlightedProjectProps } from "./HighlightedProject/HighlightedProject";

export const aboutText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros et, suscipit enim. Vestibulum sit amet nibh tellus. Cras tempor posuere elit in accumsan. Donec posuere, sem vitae faucibus hendrerit, ex eros pretium sem, nec dictum nulla felis at felis. Nunc facilisis nisl urna. Aliquam sollicitudin, elit vel pretium tempor, mi urna consequat nulla, vitae interdum libero ipsum vel felis. Quisque purus felis, posuere at ultrices et, consectetur ac dolor. Maecenas facilisis et ante vitae sagittis. 
`;

export const highlightedProject1 = {
  title: "Collaborate Code",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros et, suscipit enim. ",
  technologies: ["Python", "JS", "Flask", "HTML & CSS"],
  clickUrl: "https://github.com/andrewcoool/collaborate-code",
  imgUrl: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
} as HighlightedProjectProps;

export const highlightedProject2 = {
  title: "Cupet",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros et, suscipit enim. ",
  technologies: ["Java", "Android", "Java Spring", "MySQL"],
  clickUrl: "https://github.com/andrewcoool/cupet-backend",
  imgUrl: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
} as HighlightedProjectProps;

export const allProjects = [
  {
    title: "Rise Up Bot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros.",
    clickUrl: "http://google.ca",
    technologies: ["Python"]
  },
  {
    title: "Collaborate Code",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros.",
    clickUrl: "http://google.ca",
    technologies: ["Python", "React", "Typescript"]
  },
  {
    title: "Spotify Song Analytics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros.",
    clickUrl: "http://google.ca",
    technologies: ["Python", "PyQt5"]
  },
  {
    title: "Wildfire Visualizer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros.",
    clickUrl: "http://google.ca",
    technologies: ["Python", "Numpy", "SQLite"]
  },
  {
    title: "Cupet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros.",
    clickUrl: "http://google.ca",
    technologies: ["Java", "Android", "Spring"]
  },
  {
    title: "Personal Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mauris ex, quis vestibulum mi eleifend ac. Sed quis diam varius, tempus eros.",
    clickUrl: "http://google.ca",
    technologies: ["React", "Typescript"]
  },
] as ProjectCardProps[];

export const contact = {
  email: "andrewq.qiu@mail.utoronto.ca",
  github: {
    name: "@andrewcoool",
    url: "https://github.com/andrewcoool/"
  }
} as ContactProps;