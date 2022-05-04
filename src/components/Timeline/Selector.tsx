import styled from "styled-components";
import { JobsData, TimelineControllerProps } from "./Timeline";
import { TimelineColors } from "./TimelineColors";

interface JobProps {
  employer: string,
  colors: string[],
  index: number,
  isSelected: boolean,
  isHovered: boolean,
  onClick: (index: number) => void,
  onHover: (index: number) => void,
  onMouseLeave: (index: number) => void
}

const JobContainer = styled.div<{colors: string[], isSelected: boolean, isHovered: boolean}>`
  display: flex;
  align-items: center;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }

  &:hover div:nth-child(1) {
    background-color: ${props => props.colors[1]};
  }

  & div:nth-child(1) {
    ${props => (props.isSelected || props.isHovered) && 'background-color: ' + props.colors[1] + ';'}
  }

  transition: background-color 0.3s linear;
`;

const JobColorSquare = styled.div<{colors: string[]}>`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: ${props => props.colors[0]};
  transition: background-color 0.2s linear;
`;

const JobText = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s linear;
`;

function Job({employer, colors, index, isSelected,
   isHovered, onClick, onHover, onMouseLeave}: JobProps) {
  return <JobContainer isSelected={isSelected} 
          onClick={() => {onClick(index)}}
          onMouseOver={() => {onHover(index)}}
          onMouseLeave={() => {onMouseLeave(index)}}
          colors={colors}
          isHovered={isHovered}
          >
    <JobColorSquare colors={colors}/>
    <JobText style={{
      color: isSelected ? 'white' : '#7B7B7B'
    }}>{employer}</JobText>
  </JobContainer>
}

const SelectorContainer = styled.div`
  display: inline-block;
  width: 250px;
  height: 100%;
  vertical-align: top;
`;

export function Selector (props: TimelineControllerProps) {
  const jobs = [];

  for (let i = 0; i < props.data.length; i++) {
    jobs.push(<Job
      employer={props.data[i].employer}
      colors={TimelineColors[i]}
      index={i}
      isSelected={props.selectedIndex === i}
      isHovered={props.hoverIndex === i}
      onClick={props.selectHandler}
      onHover={props.hoverHandler}
      onMouseLeave={props.mouseLeaveHandler}
    />);
  }

  return <SelectorContainer>
    {jobs}
  </SelectorContainer>
}