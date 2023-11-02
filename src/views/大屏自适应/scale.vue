<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({})
const chartRef = ref()
onMounted(() => {
  window.onresize = () => {
    const designDraftWidth = 1920 //设计稿的宽度
    const designDraftHeight = 960 //设计稿的高度
    // 根据屏幕的变化适配的比例
    const scale =
      document.documentElement.clientWidth /
        document.documentElement.clientHeight <
      designDraftWidth / designDraftHeight
        ? document.documentElement.clientWidth / designDraftWidth
        : document.documentElement.clientHeight / designDraftHeight;
    console.log(scale.value)
    chartRef.value.style.transform= `scale(${scale})`
  }
})
</script>
<template>
  <div class="chart" id="screen" ref="chartRef"></div>
</template>
<style lang="less" scoped>
.chart {
  width: 400px;
  height: 400px;
  background-color:red;
  margin:0;
}
</style>
