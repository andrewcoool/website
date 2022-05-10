import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [ width, setWidth ] = useState(0);
  
  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;
}