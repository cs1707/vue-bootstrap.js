<template>
  <div class="item" :class="classMap">
    <slot></slot>
  </div>
</template>

<script>
  import emitter from '../../mixins/emitter'
  export default {
    name: 'bs-carousel-item',
    mixins: [emitter],
    data () {
      return {
        classMap: {}
      }
    },
    mounted () {
      this.dispatch('bs-carousel', 'add-slide', this)
    },
    beforeDestroy () {
      this.dispatch('bs-carousel', 'remove-slide', this)
    }
  }
</script>
