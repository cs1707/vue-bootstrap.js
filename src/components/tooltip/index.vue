<template>
  <span>
    <div class="bs-inline-block" ref="reference"
      @mouseenter="handleShowPopper"
      @mouseleave="handleHidePopper">
      <slot></slot>
    </div>
    <div class="tooltip fade in" :class="[placement]" v-show="showPopper" role="tooltip" ref="popper">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        <slot name="content">
          {{content}}
        </slot>
      </div>
    </div>
  </span>
</template>

<script>
  import Popper from '../../mixins/vue-popper'

  export default {
    name: 'bs-tooltip',
    mixins: [Popper],
    props: {
      content: String,
      openDelay: {
        type: Number,
        default: 0
      },
      disabled: Boolean,
      manual: Boolean,
      options: {
        type: Object,
        default () {
          return {
            boundariesPadding: 10,
            gpuAcceleration: false,
            boundariesElement: 'body',
            flipped: false
          }
        }
      }
    },
    methods: {
      handleShowPopper () {
        if (this.manual) return
        this.timeout = setTimeout(() => {
          this.showPopper = true
        }, this.openDelay)
      },
      handleHidePopper () {
        if (this.manual) return
        clearTimeout(this.timeout)
        this.showPopper = false
        this.doDestroy()
      }
    }
  }
</script>

<style>
  .bs-inline-block {
    display: inline-block;
  }
</style>
