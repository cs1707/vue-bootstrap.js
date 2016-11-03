<template>
  <div class="carousel slide">
    <ol class="carousel-indicators">
      <li v-for="item in slides" :class="{ active: item.classMap.active }" @click="to(item)"></li>
    </ol>

    <div class="carousel-inner">
      <slot></slot>
    </div>

    <a class="left carousel-control" @click="prev()">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" @click="next()">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'bs-carousel',
    componentName: 'bs-carousel',
    props: {
      active: {
        type: Number,
        default: 0
      },
      interval: {
        type: Number,
        default: 5000
      },
      pause: {
        type: Boolean,
        default: true
      },
      transition: {
        type: Boolean,
        default: true
      },
      wrap: {
        type: Boolean,
        default: true
      },
      indicator: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        slides: [],
        sliding: false,
        currentInterval: null
      }
    },
    methods: {
      addSlide (slide) {
        this.slides.push(slide)
        this.slides.forEach((item, index) => {
          item.classMap = {
            active: index === 0
          }
        })
        this.restartTimer()
      },
      removeSlide (slide) {
        let index = this.slides.indexOf(slide)
        if (index === -1) {
          return
        }
        this.slides.splice(index, 1)
        this.restartTimer()
      },
      getItemFromDirection (type, active) {
        let index = this.slides.indexOf(active)
        if (index === -1) {
          return
        }
        let nextIndex = type === 'next' ? index + 1 : index - 1
        nextIndex = (nextIndex + this.slides.length) % this.slides.length
        return [ this.slides[nextIndex], nextIndex ]
      },
      slide (type, next) {
        this.sliding = true

        let active = this.slides.find((item) => {
          return item.classMap.active
        })
        if (!next) {
          [ next ] = this.getItemFromDirection(type, active)
        }
        if (next === active) {
          return
        }
        let direction = type === 'next' ? 'left' : 'right'
        this.$set(next.classMap, type, true)
        this.$nextTick(() => {
          next.$el.offsetWidth // force reflow
          this.$set(active.classMap, direction, true)
          this.$set(next.classMap, direction, true)
        })
        let listener = () => {
          next.classMap = {
            [type]: false,
            [direction]: false,
            active: true
          }
          active.classMap = {
            [direction]: false,
            active: false
          }
          this.sliding = false
          active.$el.removeEventListener('transitionend', listener)
        }
        active.$el.addEventListener('transitionend', listener)
      },
      next () {
        if (this.sliding) {
          return
        }
        if (!this.wrap) {
          let nextIndex = this.getItemFromDirection('next')[1]
          if (nextIndex !== 0) {
            this.slide('next')
          }
        }
        this.slide('next')
      },
      prev () {
        if (this.sliding) {
          return
        }
        if (!this.wrap) {
          let nextIndex = this.getItemFromDirection('prev')[1]
          if (nextIndex !== this.slides.length - 1) {
            this.slide('prev')
          }
        }
        this.slide('prev')
      },
      to (next) {
        let activeIndex = this.slides.findIndex((item) => {
          return item.classMap.active
        })
        let nextIndex = this.slides.indexOf(next)
        let type = nextIndex > activeIndex ? 'next' : 'prev'
        if (this.sliding) {
          return
        }
        this.slide(type, next)
      },
      resetTimer () {
        clearInterval(this.currentInterval)
      },
      restartTimer () {
        this.resetTimer()
        if (this.interval > 0 && this.slides.length) {
          this.currentInterval = setInterval(this.next, this.interval)
        }
      },
      playCarousel () {
        this.restartTimer()
      },
      pauseCarousel () {
        if (this.noPause) {
          return
        }
        this.resetTimer()
      }
    },
    created () {
      this.$on('add-slide', this.addSlide)
      this.$on('remove-slide', this.removeSlide)
    },
    mounted () {
      this.$el.addEventListener('mouseenter', this.pauseCarousel)
      this.$el.addEventListener('mouseleave', this.playCarousel)
    },
    beforeDestroy () {
      this.resetTimer()
    }
  }
</script>
