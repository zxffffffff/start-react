import React from 'react';
import { Button } from 'antd';

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <p>
          this is {this.props.page} page.
        </p>
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
          切换 page
        </Button>
      </div>
    );
  }
}

export default MainPage;
