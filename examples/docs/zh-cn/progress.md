## Progress bar

### 基本用法

::: demo

``` html
<bs-progress>
  <bs-progress-bar :percentage="20">20%</bs-progress-bar>
</bs-progress>
```

:::

### 进度条类型
::: demo

``` html
<bs-progress>
  <bs-progress-bar type="success" :percentage="20">20%</bs-progress-bar>
</bs-progress>
<bs-progress>
  <bs-progress-bar type="info" :percentage="30">30%</bs-progress-bar>
</bs-progress>
<bs-progress>
  <bs-progress-bar type="warning" :percentage="50">50%</bs-progress-bar>
</bs-progress>
<bs-progress>
  <bs-progress-bar type="danger" :percentage="10">10%</bs-progress-bar>
</bs-progress>
```

:::

### 动画效果

::: demo

``` html
<bs-progress>
  <bs-progress-bar type="danger" :striped="true" :percentage="30">30%</bs-progress-bar>
</bs-progress>

<bs-progress>
  <bs-progress-bar type="danger" :striped="true" :percentage="40" :animated="false">40%</bs-progress-bar>
</bs-progress>
```

:::

### 堆叠效果
::: demo

``` html
<bs-progress>
  <bs-progress-bar type="danger" :percentage="40">40%</bs-progress-bar>
  <bs-progress-bar type="success" :percentage="20">20%</bs-progress-bar>
  <bs-progress-bar type="info" :percentage="10">10%</bs-progress-bar>
  <bs-progress-bar type="warning" :percentage="30">30%</bs-progress-bar>
</bs-progress>
```

:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| **percentage** | **百分比（必填）**   | number          |     0-100          |     0    |
| type          | 进度条类型           | string         | danger, success, info, warning | - |
| striped | 条纹效果 | boolean| - | false |
| animated | 动画效果 | boolean | - | false |
