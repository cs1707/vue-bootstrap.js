## Modal

::: demo
``` html
<button class="btn btn-primary" @click="isShow1 = true">open modal</button>
<button class="btn btn-primary" @click="isShow2 = true">large modal</button>
<button class="btn btn-primary" @click="isShow3 = true">small modal</button>
<bs-modal v-model="isShow1">
  <div class="modal-header">
    <button type="button" class="close" @click="isShow1 = false"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <h4 class="modal-title">Modal title</h4>
  </div>
  <div class="modal-body">
    <p>One fine body&hellip;</p>
    <p>
    Overflowing text to show scroll behavior

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal" @click="isShow1 = false">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</bs-modal>

<bs-modal v-model="isShow2" size="lg">
  <div class="modal-header">
    <button type="button" class="close" @click="isShow2 = false"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <h4 class="modal-title">Modal title</h4>
  </div>
  <div class="modal-body">
    <p>One fine body&hellip;</p>
    <p>
    Overflowing text to show scroll behavior

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal" @click="isShow2 = false">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</bs-modal>

<bs-modal v-model="isShow3" size="sm">
  <div class="modal-header">
    <button type="button" class="close" @click="isShow3 = false"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <h4 class="modal-title">Modal title</h4>
  </div>
  <div class="modal-body">
    <p>One fine body&hellip;</p>
    <p>
    Overflowing text to show scroll behavior

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal" @click="isShow3 = false">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
</bs-modal>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| backdrop  | 是否需要遮罩层 | Boolean | — | true |
| size      | modal 的大小 | String    | lg, sm | - |
| keyboard  | 是否按 esc 键关闭 modal | Boolean    | - | true |
| close | 是否点击 modal 框之外的区域来关闭 modal | Boolean    | - | true |

### Slot
| name | 说明 |
|------|--------|
| — | modal 的内容 |


<script>
  export default {
    data () {
      return {
        isShow1: false,
        isShow2: false,
        isShow3: false,
        isShow4: false
      }
    }
  }
</script>
