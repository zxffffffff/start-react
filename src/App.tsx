import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Header } from 'antd/es/layout/layout';

const About = React.lazy(() => import("./pages/About"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

// 添加样式：可以使用 className，它的工作方式与 HTML class 属性相同，
// 1、<header style={ border: '2px solid orange', color: 'black', fontSize: '18px' }>
// 2、在单独的 CSS 文件中为其编写 className.{ xxx }
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <React.Suspense fallback={<>loading...</>}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function RootLayout() {
  return (
    <div>
      <h1>Root (一级路由)</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/abc123">404</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {/* Outlet 用于渲染匹配的 Route */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>页面不存在</p>
    </div>
  );
}

export default App;
