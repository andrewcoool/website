import { useEffect, useRef, useState } from "react"
import useOnScreen from "../../hooks/useOnScreen/useOnScreen"

export interface MountInViewProps extends React.HTMLAttributes<HTMLDivElement>{}

/**
 * A component that mounts its children once it comes into view.
 */
export function MountInView(props: MountInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useOnScreen(ref);
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    if (inView){
      setVisible(true);
    }
  }, [inView]);

  return <div ref={ref}>
    { visible && props.children }
  </div>
}