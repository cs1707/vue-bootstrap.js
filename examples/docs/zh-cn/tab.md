## Tab

::: demo
``` html
<tab>
  <tab-item :active="active === 'home'" @click.native="active = 'home'">Home</tab-item>
  <tab-item :active="active === 'profile'" @click.native="active = 'profile'">Profile</tab-item>
  <tab-item :active="active === 'other'" @click.native="active = 'other'">Other</tab-item>
</tab>
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
