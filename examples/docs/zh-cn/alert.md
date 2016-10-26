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
  <alert type="danger" :closable="true">
    可以关闭的提示(默认显示关闭按钮)
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
  <alert type="danger" @on-close="close">
    关闭事件
  </alert>
</template>
<script>
  export default {
    methods: {
      close () {
        window.alert('close')
      }
    }
  }
</script>
```
:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | success/warning/info/error | info |
| closable | 是否可关闭 | boolean | — | true |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| on-close | 关闭alert时触发的事件 | — |

<script>
  export default {
    methods: {
      close () {
        window.alert('close')
      }
    }
  }
</script>

