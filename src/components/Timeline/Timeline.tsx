import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useWindowResize } from "../../hooks/useWindowResize/useWindowResize";
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
  flex-grow: 1;
  min-width: 0;
`;

const ControllerContainer = styled.div`
  padding-left: 40px;
  min-height: 350px;
  max-width: 500px;

  @media (max-width: 1200px) {
    margin: auto;
    margin-top: 30px;
    max-width: 1000px;
  }

  margin-top: 30px;
`;

/**
 * An interface representing a single job
 */
export interface JobData {
  /** The start date */
  start: string,
  /** The end date */
  end: string,
  /** The position title */
  title: string,
  /** The name of the employer */
  employer: string,
  /** A list of the responsibilities done in the job */
  points: string[],
} 

/** A type representing a complete job history */
export type JobsData = JobData[];
export interface TimelineControllerProps {
  /** The complete job history*/
  data: JobsData,
  /** The index of the job selected */
  selectedIndex: number,
  /** The index of the job hovered over */
  hoverIndex: number,
  /** A handler for when a job is selected */
  selectHandler: (index: number) => void,
  /** A handler for when a job is hovered over */
  hoverHandler: (index: number) => void,
  /** A handler for when a mouse leaves a job */
  mouseLeaveHandler: (index: number) => void
}

const dummyData = [
  {start: '2020-09-01', end: '2022-05-04', title: 'Computer Science', employer: 'University of Toronto', points:
   ['Worked in teams to test, document, and track bugs in the FIFA 21 video game']},
  {start: '2021-07-01', end: '2021-09-01', title: 'Software Intern', employer: 'Game of Apps', points:
   ['Created a registration system using React, allowing students to register for the Game of Apps program online; eliminated admin overhead by handling student data programmatically',
  'Integrated online payments with Braintree APIusing React, Node.js Express, and Heroku',
  'Documented the Game of Apps website and server codebase, improving its readability',
  'Excelled in a fast-paced environment and aided in mentoring peer interns with less experience'

]},
  {start: '2020-06-29', end: '2020-09-01', title: 'Development Support', employer: 'Electronic Arts', points:
   ['Worked in teams to test, document, and track bugs in the FIFA 21 video game']},
] as JobsData;

const start = parseDateString(minStr(dummyData.map(x => x.start)));
const end = parseDateString(maxStr(dummyData.map(x => x.end)));

/**
 * A component that visualizes a complete job history using a timeline
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

  function mouseLeaveHandler(index: number) {
    setHoverIndex(selectedIndex);
  }

  function updateYearWidth() {
    if (ref.current != null) {
      setYearWidth((ref.current.offsetWidth - 108) / diffInYr(end, start));
    }
  }

  useWindowResize(updateYearWidth, 1000);
  useEffect(() => {updateYearWidth()}, []);

  const controllerProps = { data: dummyData, selectedIndex, hoverIndex,
     selectHandler, mouseLeaveHandler, hoverHandler } as TimelineControllerProps;

  return <Container>
    <TimelineContainer ref={ref}>
      <TimelineBody yearWidth={yearWidth} timelineStart={start} {...controllerProps}/>
      <TimelineBar start={start} end={end} yearWidth={yearWidth}></TimelineBar>
    </TimelineContainer>
    <ControllerContainer>
      {/* <Selector {...controllerProps} /> */}
      <Description data={dummyData} hoverIndex={hoverIndex}/>
    </ControllerContainer>
  </Container>
}