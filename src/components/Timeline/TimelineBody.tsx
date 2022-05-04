import styled from "styled-components";
import { JobBar } from "./JobBar";
import { JobsData, TimelineControllerProps } from "./Timeline";
import { parseDateString } from "./util";

const TimelineBodyContainer = styled.div`
  padding-left: 54px; // padding + half of tick size
  padding-right: 54px;
  padding-bottom: 5px;
`;

export interface TimelineBodyProps extends TimelineControllerProps{
  yearWidth: number,
  timelineStart: Date,
}

export function TimelineBody(props: TimelineBodyProps) {
  const bars = [];

  for (let i = 0; i < props.data.length; i++){
    bars.push(<JobBar 
      yearWidth={props.yearWidth}
      timelineStart={props.timelineStart}
      index={i}
      jobData={props.data[i]}
      isSelected={props.selectedIndex === i}
      isHovered={props.hoverIndex === i}
      onHover={props.hoverHandler}
      onClick={props.selectHandler}
      onMouseLeave={props.mouseLeaveHandler}
      key={i}
    />)
  }

  return <TimelineBodyContainer>
    {bars}
  </TimelineBodyContainer>
}