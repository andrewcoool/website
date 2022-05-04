import { useEffect, useState } from "react";
import styled from "styled-components";
import { SlideContainer } from "../../design-system/animations/SlideContainer/SlideContainer";
import { H1 } from "../../design-system/text";
import { TermSquare } from "./TermSquare";

const Container = styled.div``;
const Content = styled.div`
  color: white;
`;
export interface TermTextProps {
  text: String;
  typeDelay?: number;
  blinkDelay?: number;
  pauseDelay?: number;
  children?: React.ReactNode;
}
export function TermText({ text, typeDelay=50, blinkDelay=450, pauseDelay=10, children }: TermTextProps) {
  const [ time, setTime ] = useState(-1);
  const [ squareIsVisible, setSquareIsVisible ] = useState(true);
  const [ isShown, setIsShown ] = useState(false);

  function enter() {
    setIsShown(true);
  }

  // Typing
  useEffect(() => {
    if (time === text.length + pauseDelay) {
      enter();
    }else{
      setTimeout(() => { setTime(time + 1); }, typeDelay);
    }
  }, [text, typeDelay, pauseDelay, time]);

  // Blinking
  useEffect(() => {
    if (isShown) {
      setSquareIsVisible(false);
    }else{
      setTimeout(() => { setSquareIsVisible(!squareIsVisible); }, blinkDelay);
    }
  }, [blinkDelay, squareIsVisible, isShown]);

  return <Container>
    <H1>
      { time !== -1 ? text.slice(0, time) : undefined }
      <TermSquare style={{ visibility: squareIsVisible ? 'visible' : 'hidden'}}></TermSquare>
    </H1>
    <SlideContainer visible={isShown}>{ children }</SlideContainer>

  </Container>  
}