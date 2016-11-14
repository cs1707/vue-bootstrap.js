<template>
  <li role="presentation" :class="{ active: active }">
    <a href="javascript:void(0)">
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'bs-tab-item',
    props: {
      active: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
