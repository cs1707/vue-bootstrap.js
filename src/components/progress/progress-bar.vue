<template>
  <div class="progress-bar" :class="barClass" :style="barStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'bs-progress-bar',
    props: {
      percentage: {
        type: Number,
        default: 0
      },
      type: {
        type: String,
        default: ''
      },
      striped: {
        type: Boolean,
        default: false
      },
      animated: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      barClass () {
        return {
          [`progress-bar-${this.type}`]: this.type,
          'progress-bar-striped': this.striped,
          active: this.animated
        }
      },
      barStyle () {
        return {
          width: `${this.percentage}%`
        }
      }
    }
  }
</script>
