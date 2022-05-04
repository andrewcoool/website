import styled from "styled-components";
import { JobBar } from "./JobBar";
import { JobsData } from "./Timeline";
import { parseDateString } from "./util";

const TimelineBodyContainer = styled.div``;

export interface TimelineBodyProps {
  data: JobsData,
  yearWidth: number
}

export function TimelineBody({ data, yearWidth }: TimelineBodyProps) {
  const bars = [];

  for (let i = 0; i < data.length; i++){
    bars.push(<JobBar 
      yearWidth={yearWidth}
      startYear={2020}
      start={parseDateString(data[i].start)}
      end={parseDateString(data[i].end)}
      id={i}
      onHover={(id) => {}}
      onClick={(id) => {}}
      key={i}
    />)
  }

  return <TimelineBodyContainer>
    {bars}
  </TimelineBodyContainer>
}