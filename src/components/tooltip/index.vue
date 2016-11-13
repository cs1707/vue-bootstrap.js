<template>
  <div class="bs-inline-block"
    @mouseenter="handleShowPopper"
    @mouseleave="handleHidePopper">
    <div class="bs-inline-block" ref="reference">
      <slot ></slot>
    </div>
    <div class="tooltip fade in" :class="[placement]" role="tooltip" ref="popper" v-show="showPopper">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        <slot name="content">
          {{content}}
        </slot>
      </div>
    </div>
  </div>
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
            gpuAcceleration: false
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
      }
    }
  }
</script>

<style>
  .bs-inline-block {
    display: inline-block;
  }
</style>
