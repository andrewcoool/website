import styled from "styled-components"
import { Colors } from "../design-system/colors";
import { About } from "./About";
import { AllProjects } from "./AllProjects";
import { Contact } from "./Contact";
import { HighlightedProject } from "./HighlightedProject";
import { Intro } from "./Intro";
import { Nav } from "./Nav/Nav";
import { TermHeadedContainer } from "./TermText/TermContainers";
import { Timeline } from "./Timeline";
import { aboutText, allProjects, contact, highlightedProject1, highlightedProject2 } from "./websiteData";

const Container = styled.div`
  max-width: 1060px;
  margin: auto;

  @media (max-width: 1200px){
    margin: 0 60px;
  }

  @media (max-width: 400px){
    margin: 0 30px;
  }
`;

export function Website () {
  return <Container>
    <Nav />
    <Intro />
    <TermHeadedContainer text="about" startOnScroll id="about">
      <About>
        {aboutText}
      </About>
    </TermHeadedContainer>
    <TermHeadedContainer text="experience" startOnScroll id="experience">
      <Timeline />
    </TermHeadedContainer>
    <TermHeadedContainer text="projects" startOnScroll id="projects">
      <HighlightedProject {...highlightedProject1} />
      <HighlightedProject {...highlightedProject2} imgOnLeft/>
      <AllProjects projects={allProjects}/>
    </TermHeadedContainer>
    <TermHeadedContainer text="contact" startOnScroll id="contact">
      <Contact {...contact}/>
    </TermHeadedContainer>
  </Container>
}