// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import VueBootstrap from '../src'

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueBootstrap)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
