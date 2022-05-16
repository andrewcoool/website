import styled from "styled-components"
import { Colors } from "../../design-system/colors";
import Arc from "../../icons/Arc";

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 60px;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  width: 850px;
  position: relative;
`;

const Title = styled.h1`
  color: ${Colors.White};
  font-size: 64px;
  margin: 0;
`;

const Name = styled.span`
  color: ${Colors.SkyBlue};
`

const SubText = styled.h2`
  color: ${Colors.LightGrey};
  font-size: 24px;
  margin: 0;
  position: absolute;
  right: 0;

  @media (max-width: 775px) {
    position: relative;
  }
`;

const ArcContainer = styled.div`
  position: absolute;
  margin-left: 412px;
  margin-top: -190px;

  & * {
    stroke: ${Colors.SkyBlue};
  }

  & circle {
    stroke-dasharray: 1000;
    stroke-dashoffset: 820;
    animation: arcDraw 3s linear forwards;
    animation-delay: 0.05s;
  }

  @keyframes arcDraw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export function Intro () {
  return <Container>
    <SubContainer>
      <Title>
        <ArcContainer>
          <Arc />
        </ArcContainer>
        my name is <Name>andrew qiu</Name>
      </Title>
      <SubText>
        incoming 3rd year computer science student
      </SubText>
    </SubContainer>
  </Container>
}