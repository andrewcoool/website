import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Experience } from './Timeline';
import { TimelineColorGroup, getTimelineColor, getTimelineColorGroup } from './TimelineColors';
import { diffInYr, parseDateString } from './util';

const ExperienceBarHeading = styled.div`
  color: white;
  font-size: 16px;

  transition: color 0.5s linear;
  margin-bottom: 0px;
`;

const ExperienceBarContainer = styled.div`
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

const ExperienceBarRect = styled.div<{colors: TimelineColorGroup, isSelected: boolean, isHovered: boolean}>`
  height: 20px;
  margin-top: 3px;
  margin-bottom: 8px;
  max-width: 100%;
  background-color: ${props => props.colors.unselected};

  ${props => (props.isSelected || props.isHovered) && 'background-color: ' + props.colors.selected + ';'}
  transition: background-color 0.2s linear;
`;

export interface ExperienceBarProps {
  /** The width (px) between consecutive years in the timeline */
  yearWidth: number;
  /** The start date of the timeline */
  timelineStart: Date;
  /** The data of the experience represented */
  experience: Experience;
  /** The index of the experience represented */
  index: number;
  /** Whether the experience is selected */
  isSelected: boolean;
  /** Whether the experience is being hovered */
  isHovered: boolean;
  /** A handler function for when the experience bar is hovered */
  onHover: (id: number) => void;
  /** A handler function for when the experience bar is clicked */
  onClick: (id: number) => void;
  /** A handler function for when the mouse leaves the experience bar */
  onMouseLeave: (id: number) => void
}

/**
 * A component for a bar, representing a experience held between some time period
 * in the Timeline.
 */
export function ExperienceBar(props: ExperienceBarProps) {
  const now = Date.now();
  const start = parseDateString(props.experience.start);
  let end = parseDateString(props.experience.end);
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

  return <ExperienceBarContainer style={{
      marginLeft: props.yearWidth * diffInYr(start, props.timelineStart)
    }}

    onMouseOver={() => {props.onHover(props.index)}}
    onClick={() => {props.onClick(props.index)}}
    onMouseLeave={() => {props.onMouseLeave(props.index)}}
    >
      <ExperienceBarHeading style={{
        color: (props.isSelected || props.isHovered) ? "white" : "#bdbdbd"
      }}>
        {props.experience.title} @ {' '}
        <span style={{
          color: getTimelineColor(props.experience.isEducation, props.isSelected || props.isHovered)
        }}>{props.experience.employer}</span>
      </ExperienceBarHeading>
      <ExperienceBarRect style={{
        borderRadius: (end.getTime() > Date.now()) ? "4px 0 0 4px" : "4px 4px 4px 4px",
        width: barWidth,
        // Add width animation for increasing widths only
        transition: isWidthIncreasing ? 'width 1s ease-out, background-color 0.2s linear' : 'width 0s, background-color 0.2s linear'
      }} 
      colors={getTimelineColorGroup(props.experience.isEducation)}
      isSelected={props.isSelected}
      isHovered={props.isHovered}
      />
  </ExperienceBarContainer>;
}