<template>
  <transition name="fade">
    <div role="alert" :class="[ `alert-${type}` ]" class="alert">
      <button type="button" class="close" v-if="closable" @click="close()">
        <span>×</span>
      </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'bs-alert',
    props: {
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close () {
        this.$emit('on-close')
      }
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .15s linear;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
