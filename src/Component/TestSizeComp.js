import { useSize } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';

export default function TestSizeComp({ maxWidth, maxHeight }) {
  const ref = useRef(null);
  const size = useSize(ref);
  const [reqCnt, setReqCnt] = useState(0);

  useEffect(() => {
    if (size) {
      if (reqCnt == 0)
        console.log("first req", size.width, size.height);
      else if (size.width < maxWidth && size.height < maxHeight)
        console.log("onsize req", size.width, size.height);
      setReqCnt(reqCnt + 1);
    }
  }, [size]);

  return (
    <div ref={ref}>
      width: {size?.width} ~ height: {size?.height}
    </div>
  );
}