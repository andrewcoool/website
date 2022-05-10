import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { JobData } from './Timeline';
import { TimelineColorGroup, getTimelineColor, getTimelineColorGroup } from './TimelineColors';
import { diffInYr, parseDateString } from './util';

const JobBarHeading = styled.div`
  color: white;
  font-size: 16px;

  transition: color 0.5s linear;
  margin-bottom: 0px;
`;

const JobBarContainer = styled.div`
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

const JobBarRect = styled.div<{colors: TimelineColorGroup, isSelected: boolean, isHovered: boolean}>`
  height: 20px;
  margin-top: 3px;
  margin-bottom: 8px;
  max-width: 100%;
  background-color: ${props => props.colors.unselected};

  ${props => (props.isSelected || props.isHovered) && 'background-color: ' + props.colors.selected + ';'}
  transition: background-color 0.2s linear;
`;

export interface JobBarProps {
  /** The width (px) between consecutive years in the timeline */
  yearWidth: number;
  /** The start date of the timeline */
  timelineStart: Date;
  /** The data of the job represented */
  jobData: JobData;
  /** The index of the job represented */
  index: number;
  /** Whether the job is selected */
  isSelected: boolean;
  /** Whether the job is being hovered */
  isHovered: boolean;
  /** A handler function for when the job bar is hovered */
  onHover: (id: number) => void;
  /** A handler function for when the job bar is clicked */
  onClick: (id: number) => void;
  /** A handler function for when the mouse leaves the job bar */
  onMouseLeave: (id: number) => void
}

/**
 * A component for a bar, representing a job held between some time period
 * in the Timeline.
 */
export function JobBar(props: JobBarProps) {
  const now = Date.now();
  const start = parseDateString(props.jobData.start);
  let end = parseDateString(props.jobData.end);
  end = end.getTime() > now ? new Date(now) : end;

  const [ barWidth, setBarWidth ] = useState(0);
  const [ isWidthIncreasing, setIsWidthIncreasing ] = useState(false);

  // Update bar width
  useEffect(() => {
    let newBarWidth = props.yearWidth * diffInYr(end, start);

    if (newBarWidth > barWidth) {
      setIsWidthIncreasing(true);
    }else{
      setIsWidthIncreasing(false);
    }

    setBarWidth(newBarWidth);
  }, [props.yearWidth]);

  return <JobBarContainer style={{
      marginLeft: props.yearWidth * diffInYr(start, props.timelineStart)
    }}

    onMouseOver={() => {props.onHover(props.index)}}
    onClick={() => {props.onClick(props.index)}}
    onMouseLeave={() => {props.onMouseLeave(props.index)}}
    >
      <JobBarHeading style={{
        color: (props.isSelected || props.isHovered) ? "white" : "#bdbdbd"
      }}>
        {props.jobData.title} @ {' '}
        <span style={{
          color: getTimelineColor(props.jobData.isEducation, props.isSelected || props.isHovered)
        }}>{props.jobData.employer}</span>
      </JobBarHeading>
      <JobBarRect style={{
        borderRadius: (end.getTime() > Date.now()) ? "4px 0 0 4px" : "4px 4px 4px 4px",
        width: barWidth,
        // Add width animation for increasing widths only
        transition: isWidthIncreasing ? 'width 1s ease-out, background-color 0.2s linear' : 'width 0s, background-color 0.2s linear'
      }} 
      colors={getTimelineColorGroup(props.jobData.isEducation)}
      isSelected={props.isSelected}
      isHovered={props.isHovered}
      />
  </JobBarContainer>;
}