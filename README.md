# vue-bootstrap

[![Build Status](https://img.shields.io/travis/vue-bootstrap.js/master.svg)](https://travis-ci.org/vue-bootstrap.js)
[![Test Coverage](http://img.shields.io/coveralls/vue-bootstrap.js/master.svg)](https://coveralls.io/r/vue-bootstrap.js?branch=master)
[![Latest Stable Version](https://img.shields.io/npm/v/vue-bootstrap.js.svg)](https://www.npmjs.com/package/vue-bootstrap.js)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-bootstrap.js.svg)](https://www.npmjs.com/package/vue-bootstrap.js)
[![License](https://img.shields.io/npm/l/vue-bootstrap.js.svg)](https://www.npmjs.com/package/vue-bootstrap.js)

> Bootstrap components built with Vue.js 2.0 (not production ready).

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
