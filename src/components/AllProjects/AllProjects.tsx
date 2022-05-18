import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../design-system/colors";
import { FilterButton } from "./Filter";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

const Container = styled.div`
  max-width: 1060px;
  margin-top: 65px;
`;

const Header = styled.h2`
  font-size: 24px;
  color: ${Colors.SkyBlue};
  margin: 0;
  padding: 0;
  line-height: 40px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ProjectsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-auto-rows: 280px;
  grid-gap: 20px;
`;

export interface AllProjectsProps {
  /** The list of projects to display */
  projects: ProjectCardProps[];
}

/**
 * A component displaying all personal projects as a grid of ProjectCards.
 */
export function AllProjects(props: AllProjectsProps) {
  const [filterData, setFilterData] = useState(
    {
      Python: false,
      React: false,
      JS: false,
      TypeScript: false,
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
    <HeaderRow>
      <Header>All Projects</Header>
      <FilterButton onToggle={toggle} filterData={filterData}/>
    </HeaderRow>
    <ProjectsContainer layout transition={{
      staggerChildren: 0.5
    }}>
      <AnimatePresence>
        {filtered.map(
          x => <ProjectCard {...x} key={x.title}/>  
        )}
      </AnimatePresence>
    </ProjectsContainer>
  </Container>
}