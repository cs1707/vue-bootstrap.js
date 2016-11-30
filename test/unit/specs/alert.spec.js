import Vue from 'vue'
import Alert from 'src/components/alert'
import VueBootstrap from 'src'

Vue.use(VueBootstrap)

describe('Alert', () => {
  it('create', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Alert, {}, 'hello')
    })
    expect(vm.$el.textContent.trim()).to.equal('hello')
  })
})
