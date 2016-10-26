## Affix

将页面元素钉在可视范围。

::: demo
``` html
<affix class="affix-demo1" :offset-top="200" :offset-bottom="600">
  <button class="btn btn-default">affix top</button>
</affix>
```
:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| offset-top | 距离窗口顶部达到指定偏移量后触发 | Number | - | 0 |
| offset-bottom | 距离窗口底部达到指定偏移量后触发 | Number | - | - |

<style scoped>
  .doc {
    height: 1000px;
  }
  .affix-demo1.affix {
    top: 20px;
  }
  .bs-example {
    min-height: 100px;
  }
</style>
