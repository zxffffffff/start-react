import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/TicTacToe';
import FilterableProductTable from './components/FilterableProductTable';
import AntdDemo from './components/AntdDemo';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import { Col, Divider, Row } from 'antd';
import CodeEditor from './components/CodeEditor';
import CodeEditor2 from './components/CodeEditor2';
import RichEditor from './components/RichEditor';
import MarkDown from './components/MarkDown';

function ReactComp() {
  return <>
    JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，
    你不能在一个函数中返回多个对象，除非用一个数组把他们包装起来。
    这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。
  </>
}

// React 组件名称必须始终以大写字母开头，而 HTML 标签必须小写。
function MyButton() {
  // 以 use 开头的函数称为 Hooks 钩子。
  const [count, setCount] = useState(0); // setCount 触发更新屏幕
  const ref = useRef(0);                 // 仅引用，不触发更新屏幕

  // 处理渲染无关的操作（网络、IO、定时器等）
  // 在开发过程中，React 将立即运行并清理您的一次，这可以确保您不会忘记实现清理功能。
  useEffect(() => {
    // 监听 props 或 state 的变化，执行操作
    const timer = setInterval(() => { /* task */ }, 1000);
    // 清理操作
    return () => {
      clearInterval(timer);
    };
  }, [ref]);

  // 响应事件
  function handleClick() {
    setCount(count + 1);
    // alert('You clicked me!');
  }

  // 显示数据：JSX 允许您将标记放入 JavaScript 中，例如
  // 1、<h1> {user.name} </h1>
  // 2、<img className="avatar" src={user.imageUrl} />
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// 添加样式：可以使用 className，它的工作方式与 HTML class 属性相同，
// 1、<header style={ border: '2px solid orange', color: 'black', fontSize: '18px' }>
// 2、在单独的 CSS 文件中为其编写 className.{ xxx }
function App() {
  return (
    <div className="App">
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
      <Layout>
        <Content>
          <ReactComp />
          <Divider />
          <p>
            <MyButton />
            <MyButton />
          </p>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Game />
            </Col>
            <Col span={12}>
              <FilterableProductTable />
            </Col>
          </Row>
          <Divider />
          <AntdDemo />
          <Divider />
          <CodeEditor />
          <Divider />
          <CodeEditor2 />
          <Divider />
          <RichEditor />
          <Divider />
          <MarkDown />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
