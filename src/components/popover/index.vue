<template>
  <div class="bs-inline-block">
    <div class="popover" :class="[placement]">
      <div class="arrow"></div>
      <h3 class="popover-title">Popover top</h3>
      <div class="popover-content">
        <slot name="content">
          {{content}}
        </slot>
      </div>
    </div>
    <div class="bs-inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Popper from '../../mixins/vue-popper'

  export default {
    name: 'bs-popover',
    mixins: [ Popper ]
  }
</script>
