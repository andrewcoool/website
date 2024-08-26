import styled from "styled-components";
import { Colors } from "../../design-system/colors";
import { techToJSX } from "../technologies";
import ExternalLink from "../../icons/ExternalLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { ScreenSizes } from "../../design-system/screenSizes";

const Link = styled(motion.a)`
  text-decoration: none;
`;

const Container = styled.div`
  width: 200px;
  height: 230px;
  background-color: ${Colors.CoalBlue};
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: white;
  margin: 0;
  width: 80%;
  font-size: 20px;
`;

const Description = styled.p`
  color: ${Colors.LightGrey};
  white-space: pre-line;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExternalLinkContainer = styled.div<{isHovered: boolean}>`
  opacity: 0;
  transition: all 0.1s linear;

  & > svg{
    width: 20x;
    height: 20px;
    fill: ${Colors.White};
  }

  ${props => props.isHovered && "opacity: 1;"}

  @media (max-width: ${ScreenSizes.UnderDesktop}px){
    opacity: 1;
  }
`;

const TechList = styled.ul`
  color: ${Colors.DarkGrey};
  list-style-type: none;
  margin: 0;
  padding: 0;
  bottom: 0;
  font-size: 16px;
`;

const TechListItem = styled.li`
  float: left;
  margin-right: 10px;
  margin-top: 4px;
  display: flex;

  & > div {
    display: flex;
    line-height: 26px;
  }

  & > div > svg {
    width: 16px;
    height: 16px;
    margin: 5px;
  }
`;

export interface ProjectCardProps {
  /** The title of the project */
  title: string,
  /** A description of the project */
  description: string,
  /** The url that the user should be redirected to onclick of the project */
  clickUrl: string,
  /** A list of technologies used in the project */
  technologies: string[]
}

export function ProjectCard(props: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return <Link href={props.clickUrl} target="_blank" 
          layout
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0 , scale: 0 }}
          whileHover={{ scale: 1.04 }}>
            <Container 
              onMouseOver={() => {setIsHovered(true);}} 
              onMouseLeave={() => {setIsHovered(false);}}>
              <div>
                <TopRow>
                  <Title>{props.title}</Title>
                  <ExternalLinkContainer isHovered={isHovered}>
                    <ExternalLink></ExternalLink>
                  </ExternalLinkContainer>
                </TopRow>
                <Description>
                  {props.description}
                </Description>
              </div>
              <TechList>
                {props.technologies.map((x, i) => <TechListItem key={i}>{techToJSX(x)}</TechListItem>)}
              </TechList>
            </Container>
          </Link>;
}