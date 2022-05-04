import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { JobData } from './Timeline';
import { TimelineColors } from './TimelineColors';
import { diffInYr, parseDateString } from './util';

const JobBarHeading = styled.div`
  color: white;
  font-size: 16px;

  transition: color 0.1s linear;
  margin-bottom: 0px;
`;

const JobBarContainer = styled.div<{colors: string[]}>`
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

const JobBarRect = styled.div<{colors: string[], isSelected: boolean, isHovered: boolean}>`
  height: 20px;
  margin-top: 3px;
  margin-bottom: 8px;
  max-width: 100%;
  background-color: ${props => props.colors[0]};

  ${props => (props.isSelected || props.isHovered) && 'background-color: ' + props.colors[1] + ';'}
  transition: background-color 0.1s linear;
`;

export interface JobBarProps {
  yearWidth: number;
  timelineStart: Date;
  jobData: JobData;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  onHover: (id: number) => void;
  onClick: (id: number) => void;
  onMouseLeave: (id: number) => void
}

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

    // Add animation for increasing widths only
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
    colors={TimelineColors[props.index]}
    >
      <JobBarHeading style={{
        color: (props.isSelected || props.isHovered) ? "white" : "#bdbdbd"
      }}>
        {props.jobData.title} @ {' '}
        <span style={{
          color: (props.isSelected || props.isHovered) ?
          TimelineColors[props.index][1] : TimelineColors[props.index][0] 
        }}>{props.jobData.employer}</span>
      </JobBarHeading>
      <JobBarRect style={{
        borderRadius: (end.getTime() > Date.now()) ? "4px 0 0 4px" : "4px 4px 4px 4px",
        width: barWidth,
        transition: isWidthIncreasing ? 'width 0.3s ease-out' : 'width 0s'
      }} 
      colors={TimelineColors[props.index]}
      isSelected={props.isSelected}
      isHovered={props.isHovered}
      />
  </JobBarContainer>;
}