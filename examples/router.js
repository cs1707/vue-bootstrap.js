import Vue from 'vue'
import Router from 'vue-router'
import Components from './views/components'
import Quickstart from './docs/zh-cn/quickstart.md'
import Development from './docs/zh-cn/development.md'
import Alert from './docs/zh-cn/alert.md'
import Affix from './docs/zh-cn/affix.md'
import Dropdown from './docs/zh-cn/dropdown.md'
import Modal from './docs/zh-cn/modal.md'
import Tab from './docs/zh-cn/tab.md'
import Progress from './docs/zh-cn/progress.md'
import Carousel from './docs/zh-cn/carousel.md'
import Pagination from './docs/zh-cn/pagination.md'
import Accordion from './docs/zh-cn/accordion.md'
import Tooltip from './docs/zh-cn/tooltip.md'
import Popover from './docs/zh-cn/popover.md'

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
        },
        {
          path: 'dropdown',
          component: Dropdown
        },
        {
          path: 'modal',
          component: Modal
        },
        {
          path: 'tab',
          component: Tab
        },
        {
          path: 'progress',
          component: Progress
        },
        {
          path: 'carousel',
          component: Carousel
        },
        {
          path: 'pagination',
          component: Pagination
        },
        {
          path: 'accordion',
          component: Accordion
        },
        {
          path: 'tooltip',
          component: Tooltip
        },
        {
          path: 'popover',
          component: Popover
        }
      ]
    },
    {
      path: '*',
      redirect: '/components/quickstart'
    }
  ]
})

export default router
