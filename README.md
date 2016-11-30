# vue-bootstrap

Bootstrap components built with Vue.js 2.0 (not production ready).

## Install

``` bash
npm install vue-bootstrap.js --save
```

## Quick Start
``` javascript
import Vue from 'vue'
import VueBootstrap from 'vue-bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueBootstrap)

// or
import {
  Alert,
  Popover
  // ...
} from 'vue-bootstrap.js'

Vue.component(Alert.name, Alert)
Vue.component(Popover.name, Popover)
```
[中文文档](https://cs1707.github.io/vue-bootstrap/)
## License
MIT
