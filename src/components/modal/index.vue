<template>
  <transition
    @after-enter="afterEnter"
    @leave="leave">
    <div
      class="modal fade"
      :class="inClass"
      @click.self="handleWrapperClick()"
      @keyup.esc=""
      v-show="value"
      style="display: block;">
      <template v-if="backdrop">
        <transition
          @after-enter="afterEnter"
          @leave="leave">
          <div v-show="value" class="modal-backdrop fade" :class="inClass" @click.self="handleWrapperClick()"></div>
        </transition>
      </template>
      <div class="modal-dialog" :class="[ 'modal-' + size ]" style="z-index: 1050">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      backdrop: {
        type: Boolean,
        default: true
      },
      keyboard: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: 'md'
      },
      close: {
        type: Boolean,
        default: true
      },
      value: {}
    },
    mounted () {
      window.addEventListener('keyup', this.handleEsc)
    },
    data () {
      return {
        inClass: {
          'in': false
        }
      }
    },
    watch: {
      value (val) {
        if (val) {
          this.$emit('on-open')
        } else {
          this.$emit('on-close')
        }
      }
    },
    methods: {
      handleWrapperClick () {
        if (this.close) {
          this.$emit('input', false)
        }
      },
      handleEsc (e) {
        if (this.keyboard && e.keyCode === 27) {
          this.$emit('input', false)
        }
      },
      afterEnter () {
        this.inClass.in = true
        // todo 兼容性处理
        if ('classList' in document.body) {
          document.body.classList.add('modal-open')
        }
      },
      leave () {
        this.inClass.in = false
        // todo 兼容性处理
        if ('classList' in document.body) {
          document.body.classList.remove('modal-open')
        }
      }
    },
    beforeDestroy () {
      window.removeEventListener('keyup', this.handleEsc)
    }
  }
</script>
