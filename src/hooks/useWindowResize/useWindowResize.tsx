import { useEffect, useState } from "react";

/**
 * A hook that triggers a callback function when the browser window is resized.
 * The callback is only triggered if at least delay ms has passed since the last callback.
 */
export function useWindowResize(callback: () => void, delay: number) {
  const [ lastCallbackTime, setLastCallbackTime ] = useState(0);
  
  function handleResize() {
    const now = Date.now();
    if (now - lastCallbackTime >= delay) {
      callback();
      setLastCallbackTime(now);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
}