import styled from "styled-components";
import { Colors } from "../../design-system/colors";
import { techToJSX } from "../technologies";
import ExternalLink from "../../icons/ExternalLink";
import { useState } from "react";
import { motion } from "framer-motion";

const Link = styled.a`
  text-decoration: none;
`;

const Container = styled(motion.div)`
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
  font-size: 20px;
`;

const Description = styled.p`
  color: ${Colors.LightGrey};
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
  title: string,
  description: string,
  clickUrl: string,
  technologies: string[]
}

export function ProjectCard(props: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return <Container 
          onMouseOver={() => {setIsHovered(true);}} 
          onMouseLeave={() => {setIsHovered(false);}}
          layout
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0 , scale: 0 }}
          whileHover={{ scale: 1.04 }}
          >
    <Link href={props.clickUrl} target="_blank" >
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
      </Link>
    </Container>;
}