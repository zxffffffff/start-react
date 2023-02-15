import { useState, useLayoutEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useLayoutEffect(() => {
    function handleResize() {
      if (windowSize.width !== window.innerWidth || windowSize.height !== window.innerHeight) {
        //console.log("onsize", window.innerWidth, window.innerHeight);
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
