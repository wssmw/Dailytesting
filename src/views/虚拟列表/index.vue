<template>
  <div ref="listRef" class="fakelist" @scroll="scrollEvent">
    <div class="bg" :style="{ height: listHeight + 'px' }"></div>
    <div :style="{transform:gettransfrom}">
      <template v-for="item in listcontent">
        <div class="item" :style="{ height: itemSize + 'px' }">
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { computed, ref, onMounted } from 'vue'
import {a,loga} from './es6'
// let {b,logb}  = require('./common.js')
// console.log(a);

// console.log(b);
// b = 1
// logb()

// a = 1
// loga()
export default {
  props: {
    itemData: {
      type: Array,
      default: []
    },
    itemSize: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const listRef = ref()
    // 开始的索引
    let start = ref(0)
    // 结束的索引
    let end = ref(0)
    // 向下偏移量
    const startOffset = ref(0)
    // 总高度
    const listHeight = props.itemData.length * props.itemSize
    // 能看到的item的数量
    const visibleCount = computed(() =>
      Math.ceil(listHeight / props.itemSize)
    )
    // 能看到的内容
    const listcontent = computed(() =>
      props.itemData.slice(start.value, end.value)
    )
    // 偏移函数
    const gettransfrom = computed(
      () => `translate3d(0,${startOffset.value}px,0)`
    )
    onMounted(() => {
      end.value = start.value + visibleCount.value
    })
    // 滚动函数
    const scrollEvent = () => {
      let scrollTop = listRef.value.scrollTop
      console.log(scrollTop)
      start.value = Math.floor(scrollTop / props.itemSize)
      end.value = start.value + visibleCount.value
      startOffset.value = scrollTop - (scrollTop % props.itemSize)
    }
    return {
      listRef,
      listcontent,
      listHeight,
      gettransfrom,
      scrollEvent
    }
  }
}
</script>
<style lang="less" scoped>
.fakelist {
  width: 500px;
  height: 500px;
  background-color: red;
  overflow: auto;
  .bg {
    float: left;
  }
  .item {
    display: flex;
    justify-content: center ;
    align-items: center;
    width: 100%;
  }
}
</style>
