## Alerts

用于页面中展示重要的提示信息。

### 基本用法

::: demo
```html
<template>
  <alert type="success">
    成功提示文案
  </alert>
  <alert type="info">
    消息提示文案
  </alert>
  <alert type="warning">
    警告提示文案
  </alert>
  <alert type="danger">
    错误提示文案
  </alert>
</template>
```
:::

### 关闭按钮

::: demo
```html
<template>
  <alert v-show="isShow" type="danger" :closable="true" @on-close="isShow = false">
    可以关闭的提示
  </alert>
  <alert type="info" :closable="false">
    不可关闭的提示
  </alert>
</template>
```
:::

### 关闭事件

::: demo
```html
<template>
  <alert :type="item.type" :closable="true" @on-close="close(index)" v-for="(item, index) in list">
    {{item.msg}}
  </alert>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            type: 'danger',
            msg: '关闭事件'
          },
          {
            type: 'info',
            msg: '关闭事件'
          },
          {
            type: 'success',
            msg: '关闭事件'
          },
          {
            type: 'warning',
            msg: '关闭事件'
          }
        ]
      }
    },
    methods: {
      close (index) {
        this.list.splice(index, 1)
      }
    }
  }
</script>
```
:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | success, warning, info, dange | info |
| closable | 是否显示关闭按钮 | boolean | — | false |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| on-close | 点击关闭按钮时触发的事件 | — |

<script>
  export default {
    data () {
      return {
        list: [
          {
            type: 'danger',
            msg: '关闭事件'
          },
          {
            type: 'info',
            msg: '关闭事件'
          },
          {
            type: 'success',
            msg: '关闭事件'
          },
          {
            type: 'warning',
            msg: '关闭事件'
          }
        ],
        isShow: true
      }
    },
    methods: {
      close (index) {
        this.list.splice(index, 1)
      }
    }
  }
</script>

