## Tab

::: demo
``` html
<bs-tab>
  <bs-tab-item :active="active === 'home'" @click.native="active = 'home'">Home</bs-tab-item>
  <bs-tab-item :active="active === 'profile'" @click.native="active = 'profile'">Profile</bs-tab-item>
  <bs-tab-item :active="active === 'other'" @click.native="active = 'other'">Other</bs-tab-item>
</bs-tab>
```
:::

<script>
  export default {
    data () {
      return {
        active: 'home'
      }
    }
  }
</script>
