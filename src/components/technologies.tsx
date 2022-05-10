import ReactLogo from "../icons/React";
import PythonLogo from "../icons/Python";
import JavaLogo from "../icons/Java";
import JSLogo from "../icons/JS";
import TSLogo from "../icons/TS";
import AndroidLogo from "../icons/Android";
import React from "react";

const technologies = {
  React: ReactLogo,
  Python: PythonLogo,
  Java: JavaLogo,
  JS: JSLogo,
  TS: TSLogo,
  Android: AndroidLogo
} as Record<string, React.FC>;

/**
 * Return a JSX Element corresponding to technology.
 * 
 * If an icon corresponding to technology is stored, then the
 * returned JSX Element is prefixed with an <img> element,
 */
export function techToJSX(technology: string) {
  if (technology in technologies){
    const SVG = technologies[technology];

    return <div>
      <SVG></SVG>
      <div>{technology}</div>
    </div>
  }else{
    return <div>{technology}</div>
  }
}