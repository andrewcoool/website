import styled from 'styled-components';
import { TimelineColors } from './TimelineColors';
import { diffInYr } from './util';

const JobBarContainer = styled.div<{colors: string[]}>`
  height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${props => props.colors[0]};
  transition: background-color 0.3s linear;
  transition: width 0.5s ease-out;

  &:hover {
    background-color: ${props => props.colors[1]};
    transition: background-color 0.3s linear;
    cursor: pointer;
  }
`;

export interface JobBarProps {
  yearWidth: number;
  startYear: number;
  start: Date;
  end: Date;
  id: number;
  onHover: (id: number) => void;
  onClick: (id: number) => void;
}

export function JobBar(props: JobBarProps) {
  const now = Date.now();
  const end = props.end.getTime() > now ? new Date(now) : props.end; 

  return <JobBarContainer style={{
    borderRadius: (props.end.getTime() > Date.now()) ? "4px 0 0 4px" : "4px 4px 4px 4px",
    width: props.yearWidth * diffInYr(end, props.start),
    marginLeft: 50 + props.yearWidth * diffInYr(props.start, new Date(props.startYear, 0, 1))
  }} 

  onMouseOver={() => {props.onHover(props.id)}}
  onClick={() => {props.onClick(props.id)}}
  colors={TimelineColors[props.id]}
  />
}