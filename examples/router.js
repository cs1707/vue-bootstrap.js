import Vue from 'vue'
import Router from 'vue-router'
import Alert from './docs/zh-cn/alert'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/alert',
      component: Alert
    }
  ]
})

export default router
