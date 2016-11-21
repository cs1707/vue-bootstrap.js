## Popover

::: demo
``` html
<bs-popover placement="top" content="popover top">
  <button class="btn btn-default">popover top</button>
</bs-popover>
<bs-popover placement="right" title="popover title" content="popover right">
  <button class="btn btn-default">popover right</button>
</bs-popover>
<bs-popover placement="bottom" title="popover title" content="popover bottom">
  <button class="btn btn-default">popover bottom</button>
</bs-popover>
<bs-popover placement="left" title="popover title" trigger="hover" content="popover left">
  <button class="btn btn-default">popover left</button>
</bs-popover>
```
:::


### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | 触发方式 | String  | click, hover |    click    |
|  title              | 标题 | String | — | — |
|  content        |  显示的内容  | String            | — | — |
|  placement        |  出现位置  | String | top, bottom, left, right |  top |

### Slot
| 参数               | 说明                                                     |
|--- | ---|
| — | Popover 触发的元素 |
