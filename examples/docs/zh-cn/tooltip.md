## Tooltip

::: demo
``` html
<bs-tooltip placement="top" content="Tooltip on top">
  <button type="button" class="btn btn-default">Tooltip on top</button>
</bs-tooltip>
<bs-tooltip placement="right" content="Tooltip on right">
  <button type="button" class="btn btn-default">Tooltip on right</button>
</bs-tooltip>
<bs-tooltip placement="bottom" content="Tooltip on bottom">
  <button type="button" class="btn btn-default">Tooltip on bottom</button>
</bs-tooltip>
<bs-tooltip placement="left" content="Tooltip on left">
  <button type="button" class="btn btn-default">Tooltip on left</button>
</bs-tooltip>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| placement |  Tooltip 的出现位置 | String | top, bottom, left, right | top |
| content | 显示的内容，也可以通过 slot#content 传入 DOM | String | - | - |
| value(v-model) | 状态是否可见 | Boolean | - | false |
| disabled | Tooltip 是否可用 | Boolean | - | false |
| options | popper.js 的参数 | Object | 参考 popper.js 文档 | {boundariesElement: 'body', gpuAcceleration: false} |
| openDelay | 延迟出现，单位毫秒 | Number | - | 0 |
| manual | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效 | Boolean | - | false |
