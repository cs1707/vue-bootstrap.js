<template>
  <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">VueBootstrap</router-link>
      </div>
      <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/components">组件</router-link></li>
          <li><a href="https://github.com/cs1707/vue-bootstrap" target="_blank">Github</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
 .bs-docs-nav {
    border-bottom: 1px solid #eee;
 }
</style>
