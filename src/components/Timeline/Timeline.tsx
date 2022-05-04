import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useWindowResize } from "../../hooks/useWindowResize/useWindowResize";
import { TimelineBar } from "./TimelineBar";
import { TimelineBody } from "./TimelineBody";
import { diffInYr, maxStr, minStr, parseDateString } from "./util";

const TimelineContainer = styled.div``;

export interface JobData {
  start: string,
  end: string,
  title: string,
  employer: string,
  points: string[],
} 

export type JobsData = JobData[];

const dummyData = [
  {start: '2020-01-01', end: '2021-04-01', title: 'Software Development Intern', employer: 'Game of Apps', points: ['']},
  {start: '2021-03-01', end: '2022-01-01', title: 'Development Support', employer: 'Electronic Arts', points: ['']}
] as JobsData;

const earliestYear = parseDateString(minStr(dummyData.map(x => x.start))).getFullYear();
const start = new Date(earliestYear, 0, 1);
const end = parseDateString(maxStr(dummyData.map(x => x.end)));

export function Timeline() {
  const [ yearWidth, setYearWidth ] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  function updateYearWidth() {
    if (ref.current != null) {
      console.log(ref.current.offsetWidth, diffInYr(end, start), start, end);
      console.log('yw', ref.current.offsetWidth / diffInYr(end, start));
      setYearWidth((ref.current.offsetWidth - 100) / diffInYr(end, start));
    }
  }

  useWindowResize(updateYearWidth, 1000);
  useEffect(() => {updateYearWidth()}, []);

  return <TimelineContainer ref={ref}>
    <TimelineBody data={dummyData} yearWidth={yearWidth}></TimelineBody>
    <TimelineBar start={start} end={end} yearWidth={yearWidth}></TimelineBar>
  </TimelineContainer>
}