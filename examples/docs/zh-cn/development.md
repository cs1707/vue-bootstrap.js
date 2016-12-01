## 开发指南

开发之前需要配置好 Node.js 和 npm 环境，其中 npm 需要 3.0 或以上版本。

### 目录结构
```text
|- examples/  -------------- 文档及示例页
    |- docs/  -------------- 文档
|- src/
    |- components/  --------------- 组件源码
|- build
|- config
|- package.json  ------------- npm 配置文件
|- README.md  ---------------- 项目帮助文档
|- .babelrc  ----------------- babel 配置文件
```

### 安装依赖
安装项目所需要的依赖以及子项目内的依赖。
```bash
npm install
```

### 启动开发环境

启动完成后浏览器访问 [http://localhost:5000](http://localhost:5000)

```bash
npm run dev
```
