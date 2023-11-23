import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LowCodeDemo from "./dashboard/LowCodeDemo";

const ReactDemo = React.lazy(() => import("./dashboard/ReactDemo"));
const AntdDemo = React.lazy(() => import("./dashboard/AntdDemo"));
const EditorDemo = React.lazy(() => import("./dashboard/EditorDemo"));

export default function Dashboard() {
  // These routes are defined when this component is loaded on demand via
  // dynamic import() on the home page!
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="react-demo" element={
          <React.Suspense fallback={<>lazy loading...</>}>
            <ReactDemo />
          </React.Suspense>
        } />
        <Route path="antd-demo" element={
          <React.Suspense fallback={<>lazy loading...</>}>
            <AntdDemo />
          </React.Suspense>
        } />
        <Route path="editor-demo" element={
          <React.Suspense fallback={<>lazy loading...</>}>
            <EditorDemo />
          </React.Suspense>
        } />
        <Route path="low-code-demo" element={
          <React.Suspense fallback={<>lazy loading...</>}>
            <LowCodeDemo />
          </React.Suspense>
        } />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard (二级路由)</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard Home</Link>
          </li>
          <li>
            <Link to="/dashboard/react-demo">React Demo</Link>
          </li>
          <li>
            <Link to="/dashboard/antd-demo">Antd Demo</Link>
          </li>
          <li>
            <Link to="/dashboard/editor-demo">Editor Demo</Link>
          </li>
          <li>
            <Link to="/dashboard/low-code-demo">LowCode Demo</Link>
          </li>
          <li>
            <Link to="/dashboard/abc123">404</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function DashboardHome() {
  return (
    <div>
      <h3>Dashboard Home</h3>
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
