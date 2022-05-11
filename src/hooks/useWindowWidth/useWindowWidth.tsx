import { useEffect, useState } from "react";

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