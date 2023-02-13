import React from 'react';
import { Button } from 'antd';

class AntdPage extends React.Component {
  render() {
    return (
      <div className="AntdPage">
        <p>
          test antd
        </p>
        <Button
          type="primary"
          onClick={(event) => { this.props.onClickPage("main"); }}
        >
          切换Page main
        </Button>
      </div>
    );
  }
}

export default AntdPage;
