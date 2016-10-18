import Vue from 'vue'
import Router from 'vue-router'
import AlertDoc from './views/alert-doc'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/alert',
      component: AlertDoc
    }
  ]
})

export default router
