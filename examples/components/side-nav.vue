<template>
  <div class="bs-docs-sidebar" role="complementary">
    <!-- <affix :offset-top="90"> -->
      <ul class="nav bs-docs-sidenav">
        <li>
          <router-link to="/components/quickstart">Quickstart</router-link>
        </li>
        <li>
          <router-link to="/components/development">Development</router-link>
        </li>
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
        <li>
          <router-link to="/components/pagination">Pagination</router-link>
        </li>
        <li>
          <router-link to="/components/accordion">Accordion</router-link>
        </li>
        <li>
          <router-link to="/components/tooltip">Tooltip</router-link>
        </li>
        <li>
          <router-link to="/components/popover">Popover</router-link>
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
