import styled from "styled-components";
import { diffInYr } from "./util";

const Container = styled.div`
`;

const Bar = styled.div`
  height: 10px;
  background-color: white;
  border-radius: 4px 0 0 4px;
`;

const Tick = styled.div`
  width: 8px;
  height: 15px;
  background-color: white;
  display: inline-block;
  vertical-align: top;
`;

const YearText = styled.div`
  color: white;
`;

const TickContainer = styled.div`
  display: inline-block;
  text-align: center;
`;

const TicksContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  display:flex;
  justify-content: space-between;
`;

export interface TimelineProps {
  start: Date;
  end: Date;
  yearWidth: number;
}

export function TimelineBar({start, end, yearWidth}: TimelineProps) {
  const ticks = [];
  const startYear = start.getFullYear();
  const numYears = end.getFullYear() - startYear + 1;

  for (let i = 0; i < numYears; i++){
    const year = startYear + i;
    ticks.push(
      <TickContainer key={i}>
        <Tick/>
        <YearText>{year}</YearText>
      </TickContainer>
    );
  }

  const lastTickDate = new Date(startYear + numYears - 1, 0, 1);

  return <Container>
    <Bar />
    <TicksContainer style={{
      paddingRight: 30 + yearWidth * diffInYr(end, lastTickDate)
    }}>
      {ticks}
    </TicksContainer>
  </Container>
}