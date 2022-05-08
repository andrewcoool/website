import styled from "styled-components"
import { Colors } from "../../design-system/colors";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SubContainer = styled.div``;

const HighlightedText = styled.div`
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
`;

const TitleAndDescription = styled.div`
  height: 104px;
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

const TechListEntry = styled.li`
  float: left;
  padding-right: 20px;
`;

interface DescriptionProps {
  title: string,
  description: string,
  technologies: string[]
}

export function Description(props: DescriptionProps) {
  return <Container>
    <SubContainer>
      <HighlightedText>Highlighted Project</HighlightedText>
      <TitleAndDescription>
        <TitleText>{props.title}</TitleText>
        <DescriptionText>{props.description}</DescriptionText>
      </TitleAndDescription>
      <TechList>
        {props.technologies.map(x => <TechListEntry>{x}</TechListEntry>)}
      </TechList>
    </SubContainer>
  </Container>
}