import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MainPage from './page/MainPage';
import AntdPage from './page/AntdPage';

function App() {
  // 使用 hooks 代替 state = { page: "main" };
  const [page, setPage] = useState("main");

  const handleClickPage = (page) => {
    // 使用 hooks 代替 this.setState({ page });
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
