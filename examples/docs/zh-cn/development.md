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

如果网络不是很理想，可以用国内镜像下载。新建一个 `.npmrc` 文件在当前项目下，同时配置镜像地址，例如：
```text
registry=https://registry.npm.taobao.org
```

然后再运行

```shell
PHANTOMJS_CDNURL=http://npm.taobao.org/mirrors/phantomjs npm run bootstrap
```

### 启动开发环境

启动完成后浏览器访问 [http://localhost:5000](http://localhost:5000)

```bash
npm run dev
```

### npm scripts
// todo
```bash
npm run dev # 启动开发环境
npm run dist # 打包组件
npm run dist:all # 单独打包每个子项目
npm run lint # 检测 js 代码风格
node bin/new.js [组件名] # 创建新组件
```
