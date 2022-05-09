import React from "react";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';
import "./PopOutContainer.css";

const Container = styled.div``;

export interface PopOutContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  /** Whether or not the contents are visible. Set to true to trigger animation. */
  visible: boolean;
}

/**
 * A component that shows some content with a pop out animation.
 */
export function PopOutContainer(props: PopOutContainerProps){

  return <CSSTransition
    in={props.visible}
    timeout={500}
    mountOnEnter
    unmountOnExit
    classNames="pop"
  >
    <Container {...props}></Container>
  </CSSTransition>
}