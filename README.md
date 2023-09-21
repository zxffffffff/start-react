# start-web-react
 一个 Web React 脚手架项目，使用 TypeScript 开发

## 安装
- 需要安装 Node.js 用于本地开发，生产环境可以导出 HTML/CSS/JS 等静态文件
- 参考：https://github.com/facebook/create-react-app
```bash
# 可选：淘宝镜像源
npm config set registry https://registry.npm.taobao.org
# 确保 npx 始终使用最新版本
npm uninstall -g create-react-app
npm install -g create-react-app
```
- 创建项目
```bash
npx create-react-app my-app
cd my-app
npm start
```
- 管理项目
```bash
npm start     # 开发模式运行 http://localhost:3000
npm test      # 单元测试
npm run build # 生产模式打包 build 文件夹
```
