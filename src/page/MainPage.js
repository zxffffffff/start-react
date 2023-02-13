import React from 'react';
import { Button } from 'antd';

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <Button
          type="primary"
          onClick={(event) => { this.props.onClickPage("antd"); }}
        >
          切换Page antd
        </Button>
      </div>
    );
  }
}

export default MainPage;
