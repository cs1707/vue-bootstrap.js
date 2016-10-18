<template>
  <transition name="fade">
    <div role="alert" :class="[ `alert-${type}` ]" class="alert" v-show="visible">
      <button type="button" class="close" v-if="closable" @click="close()">
        <span>×</span>
      </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        visible: true
      }
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      close () {
        this.visible = false
        this.$emit('on-close')
      }
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .4s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
