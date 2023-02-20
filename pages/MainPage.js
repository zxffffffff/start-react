import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <p>
          this is xxx page.
        </p>
        <Link href="/">Back to home</Link>
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
        {
          <Button
            type="primary"
            onClick={(event) => { console.log("this is antd Button onClick") }}
          >
            antd Button
          </Button>
        }
      </div>
    );
  }
}

export default MainPage;
