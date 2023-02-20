import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Button } from 'antd';

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <Head>
          <title>MainPage</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
