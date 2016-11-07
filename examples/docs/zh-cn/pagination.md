## Pagination

::: demo
``` html
<bs-pagination>
</bs-pagination>
```
:::

### 分页大小
::: demo
``` html
<nav><bs-pagination size="lg"></bs-pagination></nav>
<nav><bs-pagination></bs-pagination></nav>
<nav><bs-pagination size="sm"></bs-pagination></nav>
```
:::

### 第一页最后一页按钮
::: demo
``` html
<nav><bs-pagination :boundary-links="true"></bs-pagination></nav>
<nav><bs-pagination :boundary-links="true" first-text="First" last-text="Last"></bs-pagination></nav>
```
:::

### 上一页下一页按钮
::: demo
``` html
<nav><bs-pagination :direction-links="false"></bs-pagination></nav>
<nav><bs-pagination previous-text="Previous" next-text="Next"></bs-pagination></nav>
```
:::


| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 大小 | String | lg, sm | - |
| boundary-links | 是否显示第一页和最后一页按钮 | Boolean | true, false | false |
| direction-links | 是否显示上一页和下一页按钮 | Boolean | true, false | true |
| first-text | 第一页按钮文字 | String | - | « |
| last-text | 最后一页按钮文字 | String | - | » |
| previous-text | 上一页按钮文字 | String | - | ‹ |
| next-text | 下一页按钮文字 | String | - | › |

