import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';
import "./SlideContainer.css";

const Container = styled.div``;

export interface SlideContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  visible: boolean;
}

export function SlideContainer(props: SlideContainerProps){

  return <CSSTransition
    in={props.visible}
    timeout={3000}
    classNames="slide"
  >
    <div>
      {props.visible && <Container {...props}></Container>}
    </div>
  </CSSTransition>
}