import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useWindowResize } from "../../hooks/useWindowResize/useWindowResize";
import { experiences } from "../websiteData";
import { Description } from "./Description";
import { TimelineBar } from "./TimelineBar";
import { TimelineBody } from "./TimelineBody";
import { diffInYr, maxStr, minStr, parseDateString } from "./util";

const Container = styled.div`
  display: flex;
  width: match-parent;
  align-items: center;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const TimelineContainer = styled.div`
  min-width: 60%;
  z-index: 1;

  @media (max-width: 1200px) {
    width: 100%;
    margin: 50px 0 0 0;
  }
`;

const ControllerContainer = styled.div`
  @media (max-width: 1200px) {
    margin-top: 60px;
    width: 100%;
  }
`;

/**
 * An interface representing a single experience
 */
export interface Experience {
  /** The start date */
  start: string,
  /** The end date */
  end: string,
  /** The position title */
  title: string,
  /** The name of the employer */
  employer: string,
  /** A list of the responsibilities / things done in the experience */
  points: string[],
  /** Whether or not the experience is an education */
  isEducation?: boolean;
} 

/** A type representing a complete experience history as a list of experiences */
export type Experiences = Experience[];
export interface TimelineControllerProps {
  /** The complete experience history*/
  experiences: Experiences,
  /** The index of the experience selected */
  selectedIndex: number,
  /** The index of the experience hovered over */
  hoverIndex: number,
  /** A handler for when a experience is selected */
  selectHandler: (index: number) => void,
  /** A handler for when a experience is hovered over */
  hoverHandler: (index: number) => void,
  /** A handler for when a mouse leaves a experience */
  mouseLeaveHandler: (index: number) => void
}

const start = parseDateString(minStr(experiences.map(x => x.start)));
const end = parseDateString(maxStr(experiences.map(x => x.end)));

/**
 * A component that visualizes a complete experience history using a timeline
 * and a description box.
 */
export function Timeline() {
  const [ yearWidth, setYearWidth ] = useState(0);
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  const [ hoverIndex, setHoverIndex ] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  function selectHandler(index: number) {
    setSelectedIndex(index);
  }

  function hoverHandler(index: number) {
    setHoverIndex(index);
  }

  function mouseLeaveHandler() {
    setHoverIndex(selectedIndex);
  }

  function updateYearWidth() {
    if (ref.current != null) {
      setYearWidth((ref.current.offsetWidth - 108) / diffInYr(end, start));
    }
  }

  useWindowResize(updateYearWidth, 1000);
  useEffect(() => {updateYearWidth()}, []);

  const controllerProps = { experiences: experiences, selectedIndex, hoverIndex,
     selectHandler, mouseLeaveHandler, hoverHandler } as TimelineControllerProps;

  return <Container>
    <TimelineContainer ref={ref}>
      <TimelineBody yearWidth={yearWidth} timelineStart={start} {...controllerProps}/>
      <TimelineBar start={start} end={end} yearWidth={yearWidth}></TimelineBar>
    </TimelineContainer>
    <ControllerContainer>
      <Description experiences={experiences} hoverIndex={hoverIndex}/>
    </ControllerContainer>
  </Container>
}