import styled from "styled-components";
import { diffInYr, months } from "./util";

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
  position: absolute;
  transform: translateX(4px) translateX(-50%) ;`
  
;

const TickContainer = styled.div``;

const TicksContainer = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
`;

const BetweenTicksContainer = styled.div`
  display:flex;
  flex-grow: 1;
  justify-content: space-between;`;

export interface TimelineBarProps {
  /** The start of the timeline */
  start: Date;
  /** The end of the timeline */
  end: Date;
  /** The width between consecutive years in the timeline */
  yearWidth: number;
}

/**
 * A component representing the bottom ruler/bar of the timeline,
 * containing ticks for each year from start to end.
 */
export function TimelineBar({start, end, yearWidth}: TimelineBarProps) {
  const ticks = [];
  const startYear = start.getFullYear();
  const numYears = end.getFullYear() - startYear + 1;

  for (let i = 1; i < numYears; i++){
    const year = startYear + i;
    ticks.push(
      <TickContainer key={i}>
        <Tick/>
        <YearText>{year}</YearText>
      </TickContainer>
    );
  }

  const lastTickDate = new Date(startYear + numYears - 1, 0, 1);

  const startTick = <TickContainer key={0}>
                      <Tick/>
                      <YearText>{months[start.getMonth()] + ' ' + start.getFullYear()}</YearText>
                    </TickContainer>;

  return <Container>
    <Bar />
    <TicksContainer>
      {startTick}
      <BetweenTicksContainer style={{
        paddingLeft: yearWidth * diffInYr(new Date(startYear, 12, 31), start),
        paddingRight: yearWidth * diffInYr(end, lastTickDate)
      }}>
        {ticks}
      </BetweenTicksContainer>
    </TicksContainer>
  </Container>
}