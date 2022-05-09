import React from 'react';
import './App.css';
import { AllProjects } from './components/AllProjects';
import { ProjectCardProps } from './components/AllProjects/ProjectCard';

const projects = [
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
] as ProjectCardProps[];

function App() {
  return (
    <div className="App">
      <AllProjects projects={projects}></AllProjects>
    </div>
  );
}

export default App;
