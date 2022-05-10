import styled from "styled-components";
import { ScreenSizes } from "../../design-system/screenSizes";
import { useWindowWidth } from "../../hooks/useWindowWidth/useWindowWidth";
import { Description, HighlightedText } from "./Description";

const Container = styled.div`
  display: flex;
  margin-bottom: 60px;

  @media (max-width: ${ScreenSizes.UnderDesktop}px) {
    flex-wrap: wrap;
  }
`;

const ImgLink = styled.a`
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
  transition: transform 0.1s linear;
  filter: grayscale(100%);

  &: hover {
    transform: scale(1.03);
    cursor: pointer;
    transition: transform 0.1s linear;
    filter: grayscale(0%);
  }
`;

export interface HighlightedProjectProps {
  title: string;
  description: string;
  technologies: string[];
  clickUrl: string;
  imgUrl: string;
  imgOnLeft?: boolean;
}

export function HighlightedProject(props: HighlightedProjectProps) {  
  const windowWidth = useWindowWidth();

  const img = (
    <ImgLink href={props.clickUrl} target="_blank">
      <ImgContainer imgUrl={props.imgUrl} />
    </ImgLink>
  );

  const description = (
    <Description
      title={props.title}
      description={props.description}
      technologies={props.technologies}
      showHighlightedText={windowWidth > ScreenSizes.UnderDesktop}
    />
  );

  if (windowWidth <= ScreenSizes.UnderDesktop) {
    return (
      <Container>
        <HighlightedText>Highlighted Project</HighlightedText>
        {img}
        {description}
      </Container>
    );
  } else {
    if (props.imgOnLeft) {
      return <Container>{img}{description}</Container>;
    } else {
      return <Container>{description}{img}</Container>;
    }
  }
}
