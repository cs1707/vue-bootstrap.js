<template>
  <div class="panel" :class="panelClass">
    <div class="panel-heading" @click="toggle($event)">
      <slot name="heading">
        <h4 class="panel-title">
          <a href="javascript:void(0)" ref="trigger">
            {{heading}}
          </a>
        </h4>
      </slot>
    </div>
    <transition
      @beforeEnter="beforeEnter"
      @afterEnter="afterEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave">
      <div class="panel-collapse" :class="collapseClass" :style="collapseStyle" v-show="isShow">
        <div class="panel-body" ref="panelBody">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import emitter from '../../mixins/emitter'
  export default {
    created () {
      this.$on('close-others', (trigger) => {
        if (trigger !== this) {
          this.isShow = false
          this.$emit('input', false)
        }
      })
    },
    name: 'bs-accordion-item',
    componentName: 'bs-accordion-item',
    mixins: [emitter],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'default'
      },
      heading: {
        type: String
      }
    },
    data () {
      return {
        isShow: false,
        collapseClass: [],
        collapseStyle: []
      }
    },
    computed: {
      panelClass () {
        return [ `panel-${this.type}` ]
      }
    },
    watch: {
      value: {
        immediate: true,
        handler (val) {
          this.isShow = val
        }
      }
    },
    methods: {
      toggle (e) {
        if (!this.$refs.trigger || (this.$refs.trigger && e.target === this.$refs.trigger)) {
          this.isShow = !this.isShow
          this.$emit('input', this.isShow)
          this.dispatch('bs-accordion', 'close-others', this)
        }
      },
      beforeEnter (el) {
        this.collapseClass = [ 'collapsing' ]
        this.$nextTick(() => {
          this.collapseStyle = {
            height: this.$refs.panelBody.offsetHeight + 'px'
          }
        })
      },
      afterEnter () {
        this.collapseClass = [ 'collapse', 'in' ]
        this.collapseStyle = {}
      },
      beforeLeave () {
        this.collapseStyle = {
          height: this.$refs.panelBody.offsetHeight + 'px'
        }
        this.collapseClass = [ 'collapsing', 'collapse', 'in' ]
        this.$nextTick(() => {
          this.collapseStyle = {
            height: '0px'
          }
        })
      },
      afterLeave () {
        this.collapseStyle = {}
        this.collapseClass = [ 'collapse' ]
      }
    }
  }
</script>
