import { useRef } from "react"
import useOnScreen from "../../hooks/useOnScreen/useOnScreen"

export interface MountInViewProps extends React.HTMLAttributes<HTMLDivElement>{}

export function MountInView(props: MountInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useOnScreen(ref);
  console.log(inView);

  return <div ref={ref}>
    { inView && props.children }
  </div>
}