import { useEffect, useRef, useState } from "react";
import { Col, Divider, Row } from "antd";
import TicTacToeGame from "../../components/TicTacToe";
import FilterableProductTable from "../../components/FilterableProductTable";

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

export default function ReactDemo() {
  return (
    <>
      <ReactComp />
      <Divider />
      <p>
        <MyButton />
        <MyButton />
      </p>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <TicTacToeGame />
        </Col>
        <Col span={12}>
          <FilterableProductTable />
        </Col>
      </Row>
    </>
  );
}
