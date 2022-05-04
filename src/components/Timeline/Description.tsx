import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components"
import { JobData, JobsData } from "./Timeline";
import { TimelineColors } from "./TimelineColors";
import "./Description.css";

const DescriptionContainer = styled.div`
`;

const PointsContainer = styled.ul``;
const PointEntry = styled.li`
  color: #bdbdbd;
  font-size: 16px;
  padding: 3px;
`;
const HeaderText = styled.h2`
  margin: 0;
  font-size: 20px;
  color: white;
`;

export interface DescriptionProps {
  data: JobsData;
  hoverIndex: number;
}

function DescriptionCard({jobData, index}: {jobData: JobData, index: number}) {
  const points = [];

  for (let i = 0; i < jobData.points.length; i++){
    points.push(
      <PointEntry key={i}>
        {jobData.points[i]}
      </PointEntry>
    );
  }

  return <DescriptionContainer>
    <HeaderText>
      {jobData.title} @ {' '}
      <span style={{color: TimelineColors[index][0]}}>
        {jobData.employer}
      </span>
    </HeaderText>
    <PointsContainer>
      {points}
    </PointsContainer>
  </DescriptionContainer>
}

export function Description (props: DescriptionProps) {
  return <SwitchTransition>
      <CSSTransition
          key={props.hoverIndex}
          timeout={100}
          in={true}
          unmountOnExit
          classNames="description-item"
      >
      <DescriptionCard jobData={props.data[props.hoverIndex]} index={props.hoverIndex} />
    </CSSTransition>
  </SwitchTransition>
}