import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components"
import { JobData, JobsData } from "./Timeline";
import { getTimelineColorGroup } from "./TimelineColors";
import "./Description.css";
import { Colors } from "../../design-system/colors";
import { toMthYrString } from "./util";

const DescriptionContainer = styled.div`
  background-color: ${Colors.CoalBlue};
  padding: 25px;
  height: 250px;
  margin-left: -50px;
  z-index: 0;

  @media (max-width: 1200px) {
    background: none;
    width: auto;
    height: fit-content;
    margin: 0 0 -20px 0;
  }
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

const SubTitle = styled.h3`
  margin: 5px 0 0 0;
  font-size: 18px;
  color: ${Colors.DarkGrey};
  font-weight: 400;
  font-style: italic;
`;

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
    <SwitchTransition>
      <CSSTransition
        key={index}
        timeout={100}
        in={true}
        unmountOnExit
        classNames="description-item">
      <div>
        <HeaderText>
          {jobData.title} @ {' '}
          <span style={{color: getTimelineColorGroup(jobData.isEducation).selected}}>
            {jobData.employer}
          </span>
        </HeaderText>
        <SubTitle>{toMthYrString(jobData.start)} - {toMthYrString(jobData.end)}</SubTitle>
        <PointsContainer>
          {points}
        </PointsContainer>
      </div>
    </CSSTransition>
  </SwitchTransition>
  </DescriptionContainer>
}

export interface DescriptionProps {
  /** The complete jobs data */
  data: JobsData;
  /** The index of the job currently or last hovered over */
  hoverIndex: number;
}

/**
 * A component for displaying in-depth information about an entry in
 * the job/school history. 
 */
export function Description (props: DescriptionProps) {
  return <DescriptionCard jobData={props.data[props.hoverIndex]} index={props.hoverIndex} />
}