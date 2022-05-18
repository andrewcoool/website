import { useEffect, useState } from "react";

/**
 * A React hook that returns the window width.
 * 
 * @returns The window width.
 */
export function useWindowWidth() {
  const [ width, setWidth ] = useState(-1);
  
  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;
}