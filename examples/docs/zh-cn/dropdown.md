## Dropdown

用于显示链接列表的可切换、有上下文的菜单。

### 触发方式

可以配置 click 激活或者 hover 激活。

::: demo
``` html
<dropdown class="btn-group">
  <button class="btn btn-default dropdown-toggle" type="button">
    hover 触发
    <span class="caret"></span>
  </button>
  <button class="btn btn-default" v-dropdown-toggle>wtf</button>
  <ul class="dropdown-menu" slot="dropdown">
    <li><a href="javascript:void(0)">action</a></li>
    <li><a href="javascript:void(0)">another action</a></li>
    <li><a href="javascript:void(0)">another action</a></li>
    <li class="divider"></li>
    <li><a href="javascript:void(0)">separated link</a></li>
  </ul>
</dropdown>

<dropdown class="btn-group" trigger="click">
  <button class="btn btn-default dropdown-toggle" type="button">
    click 触发
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" slot="dropdown">
    <li><a href="javascript:void(0)">action</a></li>
    <li><a href="javascript:void(0)">another action</a></li>
    <li><a href="javascript:void(0)">another action</a></li>
    <li class="divider"></li>
    <li><a href="javascript:void(0)">separated link</a></li>
  </ul>
</dropdown>
```
:::
