<template>
  <div class="panel-group">
    <slot></slot>
  </div>
</template>

<script>
  import emitter from '../../mixins/emitter'
  export default {
    name: 'bs-accordion',
    componentName: 'bs-accordion',
    mixins: [ emitter ],
    created () {
      this.$on('close-others', (trigger) => {
        if (this.closeOthers) {
          this.broadcast('bs-accordion-item', 'close-others', trigger)
        }
      })
    },
    props: {
      closeOthers: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
