import logo from './logo.svg';
import './App.css';
import React from 'react';
import MainPage from './page/MainPage';
import AntdPage from './page/AntdPage';

class App extends React.Component {
  state = {
    page: "main",
  }

  constructor(props) {
    super(props);

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClickPage = this.handleClickPage.bind(this);
  }

  handleClickPage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.routerPage()
          }
        </header>
      </div>
    );
  }

  routerPage() {
    switch (this.state.page.toLowerCase()) {
      case "main": return (
        <MainPage
          onClickPage={this.handleClickPage}
        />
      )
      case "antd": return (
        <AntdPage
          onClickPage={this.handleClickPage}
        />
      )
      default: return (
        <>404</>
      )
    }
  }
}

export default App;
