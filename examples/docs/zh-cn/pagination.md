## Pagination

::: demo
``` html
<bs-pagination :total-page="20" v-model="currentPage"></bs-pagination>
```
:::

### 分页大小
::: demo
``` html
<nav><bs-pagination size="lg" v-model="currentPage" :total-page="5"></bs-pagination></nav>
<nav><bs-pagination v-model="currentPage" :total-page="5"></bs-pagination></nav>
<nav><bs-pagination size="sm" v-model="currentPage" :total-page="5"></bs-pagination></nav>
```
:::

### 第一页最后一页按钮
::: demo
``` html
<nav><bs-pagination :boundary-links="true" v-model="currentPage" :total-page="5"></bs-pagination></nav>
<nav><bs-pagination :boundary-links="true" first-text="First" last-text="Last" v-model="currentPage" :total-page="5"></bs-pagination></nav>
```
:::

### 上一页下一页按钮
::: demo
``` html
<nav><bs-pagination :direction-links="false" v-model="currentPage" :total-page="5"></bs-pagination></nav>
<nav><bs-pagination previous-text="Previous" next-text="Next" v-model="currentPage" :total-page="5"></bs-pagination></nav>
```
:::

::: demo
``` html
<nav></nav>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 大小 | String | lg, sm | - |
| boundary-links | 是否显示第一页和最后一页按钮 | Boolean | true, false | false |
| direction-links | 是否显示上一页和下一页按钮 | Boolean | true, false | true |
| first-text | 第一页按钮文字 | String | - | « |
| last-text | 最后一页按钮文字 | String | - | » |
| previous-text | 上一页按钮文字 | String | - | ‹ |
| next-text | 下一页按钮文字 | String | - | › |
| v-model | 当前页 | Number | - | - |
| total-page | 总页数 | Number | - | - |

<script>
  export default {
    data () {
      return {
        currentPage: 1
      }
    }
  }
</script>

