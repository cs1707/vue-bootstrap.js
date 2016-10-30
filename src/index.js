import Alert from './components/alert'
import Affix from './components/affix'
import Dropdown from './components/dropdown'
import dropdownToggle from './components/dropdown/v-dropdown-toggle'

const install = function (Vue) {
  if (install.installed) {
    return
  }

  Vue.component(Alert.name, Alert)
  Vue.component(Affix.name, Affix)
  Vue.component(Dropdown.name, Dropdown)

  Vue.directive(dropdownToggle.name, dropdownToggle)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  Alert,
  Affix,
  Dropdown,
  dropdownToggle
}
