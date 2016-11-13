import Alert from './components/alert'
import Affix from './components/affix'
import Dropdown from './components/dropdown'
import Modal from './components/modal'
import ModalHeader from './components/modal-header'
import ModalBody from './components/modal-body'
import ModalFooter from './components/modal-footer'
import Tab from './components/tab'
import TabItem from './components/tab-item'
import { Progress, ProgressBar } from './components/progress'
import { Carousel, CarouselItem } from './components/carousel'
import { Accordion, AccordionItem } from './components/accordion'
import Pagination from './components/pagination'
import Tooltip from './components/tooltip'
import Popover from './components/popover'

const install = function (Vue) {
  if (install.installed) {
    return
  }

  Vue.component(Alert.name, Alert)
  Vue.component(Affix.name, Affix)
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(Modal.name, Modal)
  Vue.component(ModalHeader.name, ModalHeader)
  Vue.component(ModalBody.name, ModalBody)
  Vue.component(ModalFooter.name, ModalFooter)
  Vue.component(Tab.name, Tab)
  Vue.component(TabItem.name, TabItem)
  Vue.component(Progress.name, Progress)
  Vue.component(ProgressBar.name, ProgressBar)
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarouselItem.name, CarouselItem)
  Vue.component(Pagination.name, Pagination)
  Vue.component(Accordion.name, Accordion)
  Vue.component(AccordionItem.name, AccordionItem)
  Vue.component(Tooltip.name, Tooltip)
  Vue.component(Popover.name, Popover)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  Alert,
  Affix,
  Dropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tab,
  TabItem,
  Progress,
  ProgressBar,
  Carousel,
  CarouselItem,
  Pagination,
  Accordion,
  AccordionItem,
  Tooltip,
  Popover
}
