import React, { useEffect } from "react";

export function useOnClickOutside(ref: React.RefObject<Element>, handler: () => void) {
  useEffect(
    () => {
      function handleClick(event: Event){
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }

        handler();
      };

      document.addEventListener("mousedown", handleClick);
      document.addEventListener("touchstart", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("touchstart", handleClick);
      };
    },

    [ref, handler]
  );
}