import { useEffect, useState } from "react";
import { start } from "repl";
import styled from "styled-components";
import { TermSquare } from "./TermSquare";

const Text = styled.h1`
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
  /** The delay (in typeDelays) between completing the terminal text and triggering the "done" event */
  doneDelay?: number;
  /** The delay (ms) between the start of the animation being triggered and the animation starting */
  startDelay?: number;
  /** A prop trigger to start the term text animation */
  startTrigger?: boolean;
  /** A handler that is called when the terminal text animation is done */
  onDone: () => void;
}

/**
 * Component for the Terminal Typing animation.
 */
export function TermText({ text, typeDelay=50, blinkDelay=450,
   doneDelay=4, startDelay=0, startTrigger=true, onDone }: TermTextProps) {

  const [ time, setTime ] = useState(-1);
  const [ squareIsVisible, setSquareIsVisible ] = useState(true);
  const [ started, setStarted ] = useState(false);
  const [ isDone, setIsDone ] = useState(false);

  useEffect(() => {
    if (startTrigger){
      setTimeout(() => {setStarted(true)}, startDelay);
    }
  }, [startDelay, startTrigger]);

  // Typing
  useEffect(() => {
    if (started){
      if (time === text.length + doneDelay) {
        onDone();
        setIsDone(true);
      }else{
        setTimeout(() => { setTime(time + 1); }, typeDelay);
      }
    }
  }, [text, typeDelay, doneDelay, time, started, onDone]);

  // Blinking
  useEffect(() => {
    if (started){
      if (isDone) {
        setSquareIsVisible(false);
      }else{
        setTimeout(() => { setSquareIsVisible(!squareIsVisible); }, blinkDelay);
      }
    }
  }, [blinkDelay, squareIsVisible, isDone, started]);

  return <Text>
      <Prompt>{'> '}</Prompt>
      { time !== -1 ? text.slice(0, time) : undefined }
      <TermSquare style={{ visibility: squareIsVisible ? 'visible' : 'hidden'}}></TermSquare>
    </Text>
}