import React, { useState, useEffect, useMemo } from 'react'

/**
 * A React hook returning whether some element is visible to the user (on screen).
 * 
 * @param ref The element for the on screen event
 * @returns Whether ref is on screen
 */
export default function useOnScreen(ref: React.RefObject<Element>) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    ), []);
  
    useEffect(() => {
      ref.current && observer.observe(ref.current);

      return () => { observer.disconnect() }
    }, [ref, observer])
  
    return isIntersecting
}