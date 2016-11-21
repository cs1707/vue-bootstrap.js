## Carousel

::: demo

``` html
<bs-carousel>
  <bs-carousel-item v-for="item in slides">
    <img style="width: 100%;" :src="item.url" alt="">
    <div class="carousel-caption">
      <h3>
        {{item.title}}
      </h3>
      <p>
        {{item.text}}
      </p>
    </div>
  </bs-carousel-item>
</bs-carousel>

<script>
  export default {
    data () {
      return {
        slides: [
          {
            url: 'https://placehold.it/1200x900?text=one',
            title: 'Slide #1',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://placehold.it/1200x900?text=two',
            title: 'Slide #2',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://placehold.it/1200x900?text=three',
            title: 'Slide #3',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://placehold.it/1200x900?text=four',
            title: 'Slide #4',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://placehold.it/1200x900?text=five',
            title: 'Slide #5',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          }
        ]
      }
    }
  }
</script>
```

:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| indicator |  是否显示指示器   | boolean        |     -          |     false    |
| interval | 轮播图滚动间隔(毫秒) | number | - | 5000 |
| pause | 轮播图是否在鼠标移上时暂停| boolean| - | true |
| wrap | 轮播图是否无限滚动 | boolean | - | true |

<script>
  export default {
    data () {
      return {
        slides: [
          {
            url: 'https://placehold.it/1200x900?text=one',
            title: 'Slide #1',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://placehold.it/1200x900?text=two',
            title: 'Slide #2',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://placehold.it/1200x900?text=three',
            title: 'Slide #3',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://placehold.it/1200x900?text=four',
            title: 'Slide #4',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          },
          {
            url: 'https://placehold.it/1200x900?text=five',
            title: 'Slide #5',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
          }
        ]
      }
    }
  }
</script>
