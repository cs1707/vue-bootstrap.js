<template>
  <div class="bs-docs-sidebar" role="complementary">
    <!-- <affix :offset-top="90"> -->
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
              <router-link to="/components/alert">Alert</router-link>
            </li>
            <li>
              <router-link to="/components/affix">Affix</router-link>
            </li>
            <li>
              <router-link to="/components/dropdown">Dropdown</router-link>
            </li>
            <li>
              <router-link to="/components/modal">Modal</router-link>
            </li>
            <li>
              <router-link to="/components/tab">Tab</router-link>
            </li>
            <li>
              <router-link to="/components/progress">Progress</router-link>
            </li>
            <li>
              <router-link to="/components/carousel">Carousel</router-link>
            </li>
          </ul>
        </li>
      </ul>
    <!-- </affix> -->
  </div>
</template>

<style scoped>
  .bs-docs-sidebar .nav .sub-nav {
    display: block;
  }
  .affix {
    top: 0;
  }
</style>
