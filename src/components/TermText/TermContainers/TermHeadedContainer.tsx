import { useRef, useState } from "react";
import styled from "styled-components";
import { SlideContainer } from "../../../design-system/animations/SlideContainer";
import useOnScreen from "../../../hooks/useOnScreen/useOnScreen";
import { TermText } from "../TermText";

const Container = styled.div`
  padding-top: 50px;
  margin-top: -50px;
  margin-bottom: 60px;

  @media (max-width: 1200px) {
    margin-bottom: 40px;
  }
`;

export interface TermHeadedContainerProps {
  /** The terminal text shown */
  text: String;
  /** The delay (ms) between each character typed */
  typeDelay?: number;
  /** The delay (ms) between blinks of the terminal cursor */
  blinkDelay?: number;
  /** The delay (ms) between completing the terminal text and showing the content */
  doneDelay?: number;
  /** The element(s) to show on completion of the animation */
  children?: React.ReactNode;
  /** Whether the animation should start immediately or when the element is scrolled to */
  startOnScroll?: boolean;
  id?: string;
}

/**
 * Component for a container headed by TermText.
 * 
 * The contents of text are displayed (as if a user was typing) and the
 * children of the component are then shown when the animation completes.
 */
export function TermHeadedContainer({ children, startOnScroll, ...props }: TermHeadedContainerProps) {
  const [ isShown, setIsShown ] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(ref);

  function onTermTextDone() {
    setIsShown(true);
  }

  return <Container ref={ref} id={props.id}>
    <TermText {...props} onDone={onTermTextDone} 
    startTrigger={!startOnScroll || isOnScreen}
    startDelay={70}
    ></TermText>
    <SlideContainer visible={isShown} preserveSpace>{ children }</SlideContainer>
  </Container>  
}