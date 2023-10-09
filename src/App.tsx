import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import Game from './TicTacToe';
import FilterableProductTable from './FilterableProductTable';

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
      <header className="App-header">
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
      </header>
      <h1>
        <DatePicker />
      </h1>
      <h1>
        <MyButton />
        <MyButton />
      </h1>
      <h1>
        <Game />
      </h1>
      <h1>
        <FilterableProductTable />
      </h1>
    </div>
  );
}

export default App;
