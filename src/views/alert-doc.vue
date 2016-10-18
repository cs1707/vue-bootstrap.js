<template>
  <div class="bs-docs-section">
    <h1 class="page-header">
      Alerts
    </h1>
    <p class="lead">
Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
    </p>
    <h2>
      基本用法
    </h2>
    <div class="bs-example">
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
    </div>
    <pre>
    </pre>
    <h2>
      关闭按钮
    </h2>
    <div class="bs-example">
      <alert type="danger" :closable="true">
        可以关闭的提示(默认显示关闭按钮)
      </alert>
      <alert type="info" :closable="false">
        不可关闭的提示
      </alert>
    </div>
    <h2>关闭事件</h2>
    <div class="bs-example">
      <alert type="danger" @on-close="close">
        关闭事件
      </alert>
    </div>

    <h2>Attributes</h2>
    <table class="table">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            type
          </td>
          <td>
            主题
          </td>
          <td>
            string
          </td>
          <td>
            success | warning | info | error
          </td>
          <td>
            info
          </td>
        </tr>
        <tr>
          <td>
            closable
          </td>
          <td>
            是否可关闭
          </td>
          <td>
            boolean
          </td>
          <td>
            true | false
          </td>
          <td>
            true
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Events</h2>
    <table class="table">
      <thead>
        <tr>
          <th>
            事件名称
          </th>
          <th>
            说明
          </th>
          <th>
            回调参数
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            on-close
          </td>
          <td>
            关闭 alert 时触发的事件
          </td>
          <td>
            -
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from '../components/alert.vue'

  export default {
    components: {
      Alert
    },
    methods: {
      close () {
        window.alert('close')
      }
    }
  }
</script>
