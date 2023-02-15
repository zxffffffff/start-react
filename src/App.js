import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MainPage from './page/MainPage';
import AntdPage from './page/AntdPage';

function App() {
  const [page, setPage] = useState("main");

  const handleClickPage = (page) => {
    setPage(page);
  }

  const routerPage = () => {
    switch (page.toLowerCase()) {
      case "main": return (
        <MainPage
          page={page}
          onClickPage={handleClickPage}
        />
      )
      case "antd": return (
        <AntdPage
          page={page}
          onClickPage={handleClickPage}
        />
      )
      default: return (
        <div>404</div>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          routerPage()
        }
      </header>
    </div>
  );
}

export default App;
