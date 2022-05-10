import styled from "styled-components"
import { Colors } from "../design-system/colors";
import { About } from "./About";
import { AllProjects } from "./AllProjects";
import { Contact } from "./Contact";
import { HighlightedProject } from "./HighlightedProject";
import { Intro } from "./Intro";
import { TermHeadedContainer } from "./TermText/TermContainers";
import { Timeline } from "./Timeline";
import { aboutText, allProjects, contact, highlightedProject1, highlightedProject2 } from "./websiteData";

const Container = styled.div`
  max-width: 1060px;
  margin: auto;

  @media (max-width: 1200px){
    margin: 0 60px;
  }
`;

export function Website () {
  return <Container>
    <Intro />
    <TermHeadedContainer text="about" startOnScroll>
      <About>
        {aboutText}
      </About>
    </TermHeadedContainer>
    <TermHeadedContainer text="experience" startOnScroll>
      <Timeline />
    </TermHeadedContainer>
    <TermHeadedContainer text="projects" startOnScroll>
      <HighlightedProject {...highlightedProject1} />
      <HighlightedProject {...highlightedProject2} imgOnLeft/>
      <AllProjects projects={allProjects}/>
    </TermHeadedContainer>
    <TermHeadedContainer text="contact" startOnScroll>
      <Contact {...contact}/>
    </TermHeadedContainer>
  </Container>
}