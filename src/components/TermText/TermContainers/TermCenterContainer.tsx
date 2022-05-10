import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { SlideContainer } from "../../../design-system/animations/SlideContainer";
import { TermText } from "../TermText";

const Container = styled.div`
`;

const TermTextContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  margin-left: calc(50% - 88px);
`;

export interface TermHeadedContainerProps {
  /** The terminal text shown */
  text: String;
  /** The delay (ms) between each character typed */
  typeDelay?: number;
  /** The delay (ms) between blinks of the terminal cursor */
  blinkDelay?: number;
  /** The delay (ms) between completing the terminal text and hiding the terminal text */
  doneDelay?: number;
  /** The delay (ms) between hiding the terminal text and showing the content */
  showDelay?: number;
  /** The element(s) to show on completion of the animation */
  children?: React.ReactNode;
}

/**
 * Component for a container headed by a TermText centered in the screen.
 * 
 * The contents of text are displayed (as if a user was typing) and the
 * children of the component are then shown when the animation completes.
 */
export function TermCenterContainer({ children, showDelay=50,...props }: TermHeadedContainerProps) {
  const [ isShown, setIsShown ] = useState(false);
  const [ isTermTextDone, setTermTextDone ] = useState(false);

  function onTermTextDone() {
    setTermTextDone(true);
    setTimeout(() => {setIsShown(true)}, showDelay);
  }

  return <Container>
    <AnimatePresence>
    {!isTermTextDone && <TermTextContainer 
        initial={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{
          stiffness: 800,
          velocity: 3
         }}
        >
        <TermText {...props} onDone={onTermTextDone} />
      </TermTextContainer>
      }
    </AnimatePresence>
    <SlideContainer visible={isShown}>{ children }</SlideContainer>
  </Container>  
}