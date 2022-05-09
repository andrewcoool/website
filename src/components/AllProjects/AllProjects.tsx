import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { FilterButton } from "./Filter";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

const Container = styled.div`
  max-width: 1060px;
  margin-top: 65px;
`;

const ProjectsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-auto-rows: 280px;
  grid-gap: 20px;
`;

export interface AllProjectsProps {
  projects: ProjectCardProps[];
}

export function AllProjects(props: AllProjectsProps) {
  const [filterData, setFilterData] = useState(
    {
      Python: false,
      React: false,
      Typescript: false,
      Java: false,
      Android: false
    } as Record<string, boolean>
  );

  function toggle(item: string) {
    const newFilterData = {...filterData};
    newFilterData[item] = !newFilterData[item];

    setFilterData(newFilterData);
  }

  function matchesFilter(project: ProjectCardProps) {
    for (const item in filterData){
      if (filterData[item] && !project.technologies.includes(item)){
        return false;
      }
    }

    return true;
  }

  const filtered = props.projects.filter(matchesFilter);

  return <Container>
    <FilterButton toggle={toggle} filterData={filterData}/>
    <ProjectsContainer layout >
      <AnimatePresence>
        {filtered.map(
          x => <ProjectCard {...x} key={x.title}/>  
        )}
      </AnimatePresence>
    </ProjectsContainer>
  </Container>
}