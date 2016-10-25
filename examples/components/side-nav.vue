<template>
  <div class="bs-docs-sidebar" role="complementary">
    <ul class="nav bs-docs-sidenav">
      <li>
        <a href="javascript:void(0);">安装指南</a>
        <ul class="nav sub-nav">
          <li>
            <router-link to="/components/quickstart">快速上手</router-link>
          </li>
          <li>
            <router-link to="/components/development">开发指南</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:void(0);">组件</a>
        <ul class="nav sub-nav">
          <li>
            <router-link to="/components/alert">alert</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .bs-docs-sidebar .nav .sub-nav {
    display: block;
  }
</style>
