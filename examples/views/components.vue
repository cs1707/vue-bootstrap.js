<template>
  <div class="container bs-docs-container">
    <div class="row">
      <div class="col-xs-9">
        <router-view class="doc"></router-view>
      </div>
      <div class="col-xs-3">
        <side-nav></side-nav>
      </div>
    </div>
  </div>
</template>

<script>
  import SideNav from '../components/side-nav'
  export default {
    components: {
      SideNav
    }
  }
</script>
