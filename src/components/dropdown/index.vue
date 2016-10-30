<template>
  <div class="dropdown" :class="{open: visible}" v-clickoutside="hide">
    <slot></slot>
    <slot name="dropdown"></slot>
  </div>
</template>

<script>
  import clickoutside from '../../utils/clickoutside'

  export default {
    name: 'dropdown',
    data () {
      return {
        timeout: null,
        visible: false
      }
    },
    directives: {
      clickoutside
    },
    mounted () {
      this.initEvent()
    },
    props: {
      trigger: {
        type: String,
        default: 'hover'
      }
    },
    methods: {
      show () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = true
        }, 250)
      },
      hide () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.visible = false
        }, 150)
      },
      handleClick () {
        this.visible = !this.visible
      },
      initEvent () {
        let triggerElm = this.$slots.default[0].elm
        let dropdownElm = this.$slots.dropdown[0].elm

        if (this.trigger === 'hover') {
          triggerElm.addEventListener('mouseenter', this.show)
          triggerElm.addEventListener('mouseleave', this.hide)

          dropdownElm.addEventListener('mouseenter', this.show)
          dropdownElm.addEventListener('mouseleave', this.hide)
        } else {
          triggerElm.addEventListener('click', this.handleClick)
        }

        dropdownElm.addEventListener('click', () => {
          this.visible = false
        })
      }
    }
  }
</script>
