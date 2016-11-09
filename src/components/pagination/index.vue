<template>
  <ul class="pagination" :class="sizeClass">
    <li :class="{disabled: value <= 1}" v-if="boundaryLinks" @click="value > 1 && go(1)">
      <a href="javascript:void(0)">
        <span>{{firstText}}</span>
      </a>
    </li>
    <li :class="{disabled: value <= 1}" v-if="directionLinks" @click="value > 1 && go(value - 1)">
      <a href="javascript:void(0)">
        <span>{{previousText}}</span>
      </a>
    </li>

    <li :class="{active: value == 1}" v-if="totalPage > 0" @click="go(1)">
      <a href="javascript:void(0);">1</a>
    </li>
    <!-- previous more -->
    <li v-if="showPreviousMore" @click="go(value - 5)">
      <a href="javascript:void(0);">...</a>
    </li>

    <li :class="{active: value == i}" v-for="i in pages" @click="go(i)">
      <a href="javascript:void(0);">{{i}}</a>
    </li>

    <!-- next more -->
    <li v-if="showNextMore" @click="go(value + 5)">
      <a href="javascript:void(0);">...</a>
    </li>

    <li :class="{active: value == totalPage}" v-if="totalPage > 1" @click="go(totalPage)">
      <a href="javascript:void(0);">{{totalPage}}</a>
    </li>

    <li v-if="directionLinks" :class="{disabled: value >= totalPage}" @click="value < totalPage && go(value + 1)">
      <a href="javascript:void(0)">
        <span>{{nextText}}</span>
      </a>
    </li>
    <li v-if="boundaryLinks" :class="{disabled: value >= totalPage}" @click="value < totalPage && go(totalPage)">
      <a href="javascript:void(0)">
        <span>{{lastText}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'bs-pagination',
    props: {
      size: {
        type: String
      },
      boundaryLinks: {
        type: Boolean,
        default: false
      },
      firstText: {
        type: String,
        default: '«'
      },
      lastText: {
        type: String,
        default: '»'
      },
      directionLinks: {
        type: Boolean,
        default: true
      },
      previousText: {
        type: String,
        default: '‹'
      },
      nextText: {
        type: String,
        default: '›'
      },
      value: Number,
      totalPage: Number
    },
    data () {
      return {
        showPreviousMore: false,
        showNextMore: false
      }
    },
    computed: {
      sizeClass () {
        if (!this.size) {
          return []
        }
        return [ `pagination-${this.size}` ]
      },
      pages () {
        const count = 7

        const currentPage = Number(this.value)
        const totalPage = Number(this.totalPage)

        let showPreviousMore = false
        let showNextMore = false

        if (totalPage > count) {
          if (currentPage > count - 2) {
            showPreviousMore = true
          }

          if (currentPage < totalPage - 2) {
            showNextMore = true
          }
        }

        this.showPreviousMore = showPreviousMore
        this.showNextMore = showNextMore

        const list = []

        if (showPreviousMore && !showNextMore) {
          const start = totalPage - (count - 2)
          for (let i = start; i < totalPage; i++) {
            list.push(i)
          }
        } else if (!showPreviousMore && showNextMore) {
          for (let i = 2; i < count; i++) {
            list.push(i)
          }
        } else if (showPreviousMore && showNextMore) {
          const offset = Math.floor(count / 2) - 1
          for (let i = currentPage - offset; i <= currentPage + offset; i++) {
            list.push(i)
          }
        } else {
          for (let i = 2; i < totalPage; i++) {
            list.push(i)
          }
        }

        return list
      }
    },
    methods: {
      go (page) {
        if (!Number.isNaN(page)) {
          if (page < 1) {
            page = 1
          }
          if (page > this.totalPage) {
            page = this.totalPage
          }
        }
        if (this.value !== page) {
          this.$emit('on-change', page)
        }
        this.$emit('input', page)
      }
    }
  }
</script>
