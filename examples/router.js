import Vue from 'vue'
import Router from 'vue-router'
import Components from './views/components'
import Quickstart from './docs/zh-cn/quickstart.md'
import Development from './docs/zh-cn/development.md'
import Alert from './docs/zh-cn/alert.md'
import Affix from './docs/zh-cn/affix.md'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/components',
      redirect: '/components/quickstart',
      component: Components,
      children: [
        {
          path: 'alert',
          component: Alert
        },
        {
          path: 'quickstart',
          component: Quickstart
        },
        {
          path: 'development',
          component: Development
        },
        {
          path: 'affix',
          component: Affix
        }
      ]
    }
  ]
})

export default router
