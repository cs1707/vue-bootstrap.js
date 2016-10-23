import Alert from './components/alert'

const install = function (Vue) {
  if (install.installed) {
    return
  }

  Vue.component(Alert.name, Alert)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  Alert
}
