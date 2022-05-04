import { useEffect, useState } from "react";
import styled from "styled-components";
import { SlideContainer } from "../../design-system/animations/SlideContainer/SlideContainer";
import { TermSquare } from "./TermSquare";

const Container = styled.div``;
const Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size:36px;
`;
const Prompt = styled.span`
  color: #37AACE;
`;

export interface TermTextProps {
  /** The terminal text shown */
  text: String;
  /** The delay (ms) between each character typed */
  typeDelay?: number;
  /** The delay (ms) between blinks of the terminal cursor */
  blinkDelay?: number;
  /** The delay (ms) between completing the terminal text and showing the content */
  pauseDelay?: number;
  /** The element(s) to show on completion of the animation */
  children?: React.ReactNode;
}

/**
 * Component for the Terminal Typing animation.
 * 
 * The contents of text are displayed (as if a user was typing) and the
 * children of the component are then shown when the animation completes.
 */
export function TermText({ text, typeDelay=50, blinkDelay=450, pauseDelay=4, children }: TermTextProps) {
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
    <Title>
      <Prompt>{'> '}</Prompt>
      { time !== -1 ? text.slice(0, time) : undefined }
      <TermSquare style={{ visibility: squareIsVisible ? 'visible' : 'hidden'}}></TermSquare>
    </Title>
    <SlideContainer visible={isShown}>{ children }</SlideContainer>

  </Container>  
}