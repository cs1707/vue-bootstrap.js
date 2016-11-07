<template>
  <ul class="pagination" :class="sizeClass">
    <li v-if="boundaryLinks">
      <a href="javascript:void(0)">
        <span>{{firstText}}</span>
      </a>
    </li>
    <li v-if="directionLinks">
      <a href="javascript:void(0)">
        <span>{{previousText}}</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li v-if="directionLinks">
      <a href="javascript:void(0)">
        <span>{{nextText}}</span>
      </a>
    </li>
    <li v-if="boundaryLinks">
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
      }
    },
    computed: {
      sizeClass (val) {
        if (!val) {
          return []
        }
        return [ `pagination-${this.size}` ]
      }
    }
  }
</script>
