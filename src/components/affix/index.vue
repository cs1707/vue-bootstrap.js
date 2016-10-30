<template>
  <div :class="affixClass" :style="affixStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'affix',
    props: {
      offsetTop: {
        type: Number,
        default: 0
      },
      offsetBottom: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        affixClass: {},
        affixStyle: {},
        affixed: null,
        unpin: null,
        pinnedOffset: null
      }
    },
    methods: {
      getOffset () {
        let box = this.$el.getBoundingClientRect()
        return {
          top: box.top + window.pageYOffset - document.documentElement.clientTop,
          left: box.left + window.pageXOffset - document.documentElement.clientLeft
        }
      },
      getState (scrollHeight, height, offsetTop, offsetBottom) {
        console.log(arguments)
        let scrollTop = window.pageYOffset
        let position = this.getOffset()
        let targetHeight = window.innerHeight

        if (offsetTop != null && this.affixed === 'top') {
          return scrollTop < offsetTop ? 'top' : false
        }

        if (this.affixed === 'bottom') {
          if (offsetTop != null) {
            return scrollTop + this.unpin <= position.top ? false : 'bottom'
          }
          return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
        }

        let initializing = this.affixed == null
        let colliderTop = initializing ? scrollTop : position.top
        let colliderHeight = initializing ? targetHeight : height
        console.log(initializing)
        if (offsetTop != null && scrollTop <= offsetTop) {
          return 'top'
        }
        if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) {
          return 'bottom'
        }
        return false
      },
      getPinnedOffset () {
        if (this.pinnedOffset) {
          return this.pinnedOffset
        }
        this.affixClass = {
          affix: true
        }
        let scrollTop = window.pageYOffset
        let position = this.getOffset()

        return (this.pinnedOffset = position.top - scrollTop)
      },
      checkPosition () {
        if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
          return
        }

        let height = this.$el.clientHeight
        let scrollHeight = document.body.offsetHeight

        let affix = this.getState(scrollHeight, height, this.offsetTop, this.offsetBottom)
        if (this.affixed !== affix) {
          if (this.unpin != null) {
            this.affixStyle = {}
          }

          let affixType = 'affix' + (affix ? '-' + affix : '')
          this.affixed = affix

          this.unpin = affix === 'bottom' ? this.getPinnedOffset() : null
          this.affixClass = {
            [affixType]: true
          }
        }

        // if (affix === 'bottom') {
        //   let top = scrollHeight - height - this.offsetBottom - this.getOffset().top + (parseFloat(this.$el.style.top) || 0)
        //   this.affixStyle = {
        //     top: top + 'px'
        //   }
        // }
      },

      bindListener () {
        ;['scroll', 'resize'].forEach((e) => {
          window.addEventListener(e, this.checkPosition, false)
        })
      },
      removeListener () {
        ;['scroll', 'resize'].forEach((e) => {
          window.removeEventListener(e, this.checkPosition)
        })
      }
    },
    mounted () {
      this.checkPosition()
      this.bindListener()
    },
    beforeDestroy () {
      this.removeListener()
    }
  }
</script>
