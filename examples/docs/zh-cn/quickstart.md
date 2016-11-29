## 快速上手

vue-bootstrap.js 是用 Vue.js 2.0 实现的 Bootstrap 组件库，不依赖 jQuery.js、Bootstrap.js (not production ready)。

### 安装

```bash
$ npm install vue-bootstrap.js
```

### 注册组件

引入整个 vue-bootstrap.js

```javascript
import Vue from 'vue'
import VueBootstrap from 'vue-bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueBootstrap)
```

或者只引入你需要的组件

```javascript
import {
  Alert,
  Popover
  // ...
} from 'vuejs-bootstrap'

Vue.component(Alert.name, Alert)
Vue.component(Popover.name, Popover)
```
