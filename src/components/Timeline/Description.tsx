import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components"
import { Experience, Experiences } from "./Timeline";
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

function DescriptionCard({experience, index}: {experience: Experience, index: number}) {
  const points = [];

  for (let i = 0; i < experience.points.length; i++){
    points.push(
      <PointEntry key={i}>
        {experience.points[i]}
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
          {experience.title} @ {' '}
          <span style={{color: getTimelineColorGroup(experience.isEducation).selected}}>
            {experience.employer}
          </span>
        </HeaderText>
        <SubTitle>{toMthYrString(experience.start)} - {toMthYrString(experience.end)}</SubTitle>
        <PointsContainer>
          {points}
        </PointsContainer>
      </div>
    </CSSTransition>
  </SwitchTransition>
  </DescriptionContainer>
}

export interface DescriptionProps {
  /** The complete experience history */
  experiences: Experiences;
  /** The index of the experience currently or last hovered over */
  hoverIndex: number;
}

/**
 * A component for displaying in-depth information about an entry in
 * the experience history.
 */
export function Description (props: DescriptionProps) {
  return <DescriptionCard experience={props.experiences[props.hoverIndex]} index={props.hoverIndex} />
}