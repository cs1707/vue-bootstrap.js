import Alert from './components/alert'
import Affix from './components/affix'
import Dropdown from './components/dropdown'
import Modal from './components/modal'
import ModalHeader from './components/modal-header'
import ModalBody from './components/modal-body'
import ModalFooter from './components/modal-footer'

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
  ModalFooter
}
