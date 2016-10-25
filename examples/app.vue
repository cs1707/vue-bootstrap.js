<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainHeader from './components/header'
  export default {
    name: 'app',
    components: {
      MainHeader
    }
  }
</script>

<style>
  @import './assets/css/docs.css';
  @import './assets/css/patch.css';
  @import './assets/css/hljs.css';
</style>
