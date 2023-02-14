import React from 'react';
import { Button } from 'antd';

function AntdPage({ page, onClickPage }) {
  return (
    <div className="AntdPage">
      <p>
        this is {page} page.
      </p>
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
