import React from 'react';
import { Button } from 'antd';
import useWindowSize from '../Component/useWindowSize';
import TestSizeComp from "../Component/TestSizeComp";

function AntdPage({ page, onClickPage }) {
  const size = useWindowSize();
  return (
    <div className="AntdPage">
      <p>
        this is {page} page.
      </p>
      <div>
        width: {size.width} ~ height: {size.height}
      </div>
      <TestSizeComp
        maxWidth={300}
        maxHeight={300}
      />
      <Button
        type="primary"
        onClick={(event) => { onClickPage("main"); }}
      >
        切换 page
      </Button>
    </div>
  );
}

export default AntdPage;
