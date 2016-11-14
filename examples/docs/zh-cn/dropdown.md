## Dropdown

用于显示下拉菜单。

### 触发方式

可以配置 click 激活或者 hover 激活。

::: demo
``` html
<bs-dropdown class="btn-group">
  <button class="btn btn-default dropdown-toggle" type="button">
    hover 触发
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" slot="dropdown">
    <li><a href="javascript:void(0)">action</a></li>
    <li><a href="javascript:void(0)">another action</a></li>
    <li><a href="javascript:void(0)">another action</a></li>
    <li class="divider"></li>
    <li><a href="javascript:void(0)">separated link</a></li>
  </ul>
</bs-dropdown>

<bs-dropdown class="btn-group" trigger="click">
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
</bs-dropdown>
```
:::

### Slot
| name | 说明 |
|------|--------|
| - | 触发下拉组件元素 |
| dropdown | 下拉菜单 |

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | 触发方式 | string | hover, click | hover |
