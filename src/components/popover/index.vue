<template>
  <span class="bs-inline-block">
    <div class="bs-popover popover fade in" ref="popper" :class="[placement]" v-show="showPopper" style="display: block">
      <div class="arrow"></div>
      <h3 v-if="title" class="popover-title">{{title}}</h3>
      <div class="popover-content">
        <slot name="content">
          {{content}}
        </slot>
      </div>
    </div>
    <span ref="default" class="bs-inline-block">
      <slot></slot>
    </span>
  </span>
</template>

<script>
  import Popper from '../../mixins/vue-popper'

  export default {
    name: 'bs-popover',
    mixins: [ Popper ],
    props: {
      content: String,
      title: String,
      trigger: {
        type: String,
        default: 'click',
        validator: value => ['click', 'hover', 'focus'].includes(value)
      },
      options: {
        type: Object,
        default () {
          return {
            flipped: false,
            boundariesElement: 'body',
            gpuAcceleration: false
          }
        }
      }
    },
    mounted () {
      this.initEvent()
    },
    watch: {
      trigger (val) {
        this.offEvent()
        this.initEvent()
      }
    },
    methods: {
      toggle () {
        this.showPopper = !this.showPopper
      },
      hide () {
        this.showPopper = false
      },
      show () {
        this.showPopper = true
      },
      clickoutside (e) {
        if (this.$el.contains(e.target) || this.$refs.popper.contains(e.target)) {
          return
        }
        this.hide()
      },
      initEvent () {
        if (this.$slots.default.length <= 0) {
          return
        }
        let ref = this.$slots.default[0].elm
        if (ref.nodeType === 3) {
          ref = this.$refs.default
        }
        this.referenceElm = ref
        if (this.trigger === 'click') {
          ref.addEventListener('click', this.toggle)
          document.addEventListener('click', this.clickoutside)
        } else if (this.trigger === 'hover') {
          ref.addEventListener('mouseenter', this.show)
          ref.addEventListener('mouseleave', this.hide)
        }
      },
      offEvent () {
        const ref = this.referenceElm
        ref.removeEventListener('click', this.toggle)
        ref.removeEventListener('mouseenter', this.show)
        ref.removeEventListener('mouseleave', this.hide)
        document.removeEventListener('click', this.clickoutside)
      }
    },
    beforeDestroy () {
      this.offEvent()
    }
  }
</script>

<style>
  .bs-popover.popover.top {
    margin-bottom: 10px;
  }
  .bs-popover.popover.left {
    margin-right: 10px;
  }
</style>
