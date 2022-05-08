import styled from "styled-components";
import { Description } from "./Description";


const Container = styled.div`
  width: 950px;
  display: flex;
`;

const ImgLink = styled.a`
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled.div<{imgUrl: string}>`
  background: url(${props => props.imgUrl});
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

export interface ProjectShowcaseProps{
  title: string,
  description: string,
  technologies: string[],
  clickUrl: string,
  imgUrl: string,
  imgOnLeft?: boolean
}

export function HighlightedProject(props: ProjectShowcaseProps) {
  if (props.imgOnLeft){
    return <Container>
            <ImgLink href={props.clickUrl} target="_blank">
              <ImgContainer
                imgUrl={props.imgUrl}
              />
            </ImgLink>
            <Description title={props.title}
            description={props.description}
              technologies={props.technologies}/>
          </Container>
  }else{
    return <Container>
            <Description title={props.title}
            description={props.description}
              technologies={props.technologies}/>
            <ImgLink href={props.clickUrl} target="_blank">
              <ImgContainer
                imgUrl={props.imgUrl}
              />
            </ImgLink>
          </Container>
  }
}