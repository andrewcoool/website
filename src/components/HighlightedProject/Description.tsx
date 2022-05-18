import styled from "styled-components"
import { Colors } from "../../design-system/colors";
import { ScreenSizes } from "../../design-system/screenSizes";
import { techToJSX } from "../technologies";

const Container = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${ScreenSizes.UnderDesktop}px) {
    width: 100%;
  }
`;

const SubContainer = styled.div`
  @media (max-width: ${ScreenSizes.UnderDesktop}px) {
    width: 100%;
  }
`;

export const HighlightedText = styled.div`
  color: ${Colors.CherryPink};
  font-size: 16px;
  font-weight: bold;
  margin-left: 33px;
  padding-bottom: 15px;
`;

const TitleText = styled.h3`
  color: ${Colors.White};
  font-size: 20px;
  margin: 0;
  margin-bottom: 25px;
  font-weight: bold;
`;

const DescriptionText = styled.div`
  color: ${Colors.LightGrey};
  white-space: pre-line;
`;

const TitleAndDescription = styled.div`
  background-color: ${Colors.CoalBlue};
  padding: 33px;
`;

const TechList = styled.ul`
  color ${Colors.DarkGrey};
  list-style-type: none;
  margin: 0; 
  padding: 0;
  margin-left: 33px;
  margin-top: 15px;
`;

const TechListItem= styled.li`
  float: left;
  padding-right: 20px;

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

interface DescriptionProps {
  title: string,
  description: string,
  technologies: string[]
  showHighlightedText?: boolean;
}

export function Description(props: DescriptionProps) {
  return <Container>
    <SubContainer>
      {props.showHighlightedText && <HighlightedText>Highlighted Project</HighlightedText>}
      <TitleAndDescription>
        <TitleText>{props.title}</TitleText>
        <DescriptionText>{props.description}</DescriptionText>
      </TitleAndDescription>
      <TechList>
        {props.technologies.map(x => <TechListItem>{techToJSX(x)}</TechListItem>)}
      </TechList>
    </SubContainer>
  </Container>
}