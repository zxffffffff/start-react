# start-web-react
 一个 Web React 脚手架项目，使用 TypeScript 开发

## react
- Facebook（Meta），MIT 开源，Star 200+K
- 用于构建 GUI 的 JavaScript 库。

### 安装
- 需要安装 Node.js 用于本地开发
- 参考：https://github.com/facebook/create-react-app
```bash
# 可选：淘宝镜像源
npm config set registry https://registry.npm.taobao.org
# 确保 npx 始终使用最新版本
npm uninstall -g create-react-app
npm install -g create-react-app
```

### 创建工程
```bash
npx create-react-app start-web-react --template typescript
cd start-web-react
npm start
```

### 运行
```bash
npm start     # 开发模式
npm test      # 单元测试
npm run build # 打包生产（build 文件夹）
```

## antd
- 蚂蚁集团（阿里），MIT 开源，Star 80+K
- 基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

### 安装
```bash
npm install antd --save
npm install @ant-design/icons --save # 可选-图标组件包
```

### 使用组件
- 参考：https://ant-design.antgroup.com/components/overview-cn/
