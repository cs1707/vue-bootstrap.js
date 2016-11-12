## Accordion

::: demo
``` html
<label>
  <input type="checkbox" v-model="closeOthers">closeOthers
</label>
<bs-accordion :close-others="closeOthers">
  <bs-accordion-item heading="test">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </bs-accordion-item>
  <bs-accordion-item type="primary" heading="test">
    hello world
  </bs-accordion-item>
  <bs-accordion-item type="success" heading="test">
    hello world
  </bs-accordion-item>
  <bs-accordion-item type="danger" heading="test">
    hello world
  </bs-accordion-item>
  <bs-accordion-item type="info">
    <div slot="heading">haha</div>
    hello world
  </bs-accordion-item>
</bs-accordion>
```

<script>
  export default {
    data () {
      return {
        closeOthers: true
      }
    }
  }
</script>
