## Progress bar

::: demo
``` html
<bs-progress>
  <bs-progress-bar :percentage="20">20%</bs-progress-bar>
</bs-progress>
```
:::

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
