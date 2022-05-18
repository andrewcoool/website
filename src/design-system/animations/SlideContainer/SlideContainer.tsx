import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';
import "./SlideContainer.css";

const Container = styled.div``;

export interface SlideContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  /** Whether the contents are visible. Set to true to trigger animation. */
  visible: boolean;
  /** Whether the space of the container is kept fixed before and after it's visible. */
  preserveSpace?: boolean;
}

/**
 * A component that shows some content with a slide and fade animation.
 */
export function SlideContainer(props: SlideContainerProps){
  const [ height, setHeight ] = useState(-1);
  const tempRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tempRef.current && height === -1) {
      setHeight(tempRef.current.offsetHeight);
    } 
  }, [ height ]);

  return <CSSTransition
    in={props.visible}
    timeout={3000}
    classNames="slide"
  >
    <div>
      {props.preserveSpace && height === -1 && <Container ref={tempRef} style={{ opacity: 0 }} {...props}></Container>}
      {props.preserveSpace && !props.visible && <div style={{ width: "100%", height: height }}></div> }
      {props.visible && <Container {...props}></Container>}
    </div>
  </CSSTransition>
}