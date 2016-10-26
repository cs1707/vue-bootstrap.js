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

  .hljs {
    line-height: 1.8;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #f9fafc;
    border: solid 1px #eaeefb;
    margin-bottom: 25px;
    border-radius: 2px;
    -webkit-font-smoothing: auto;
  }
  .doc pre {
    padding: 0;
    border: none;
    background: initial;
    margin: 13px 0;
  }
  .doc .highlight {
    padding: 0;
  }
  .doc .highlight pre {
    padding: 0;
    margin: 0;
  }
  .doc .highlight code.hljs {
    margin: 0;
    border: none;
    max-height: none;
    border-radius: 0;
  }
</style>
