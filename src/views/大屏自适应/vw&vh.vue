<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const props = defineProps({})
const echartRef = ref(null)
const echartView = ref()
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
onMounted(() => {
  echartView.value = echarts.init(echartRef.value)
  echartView.value.setOption(option)
})
window.addEventListener('resize', () => {
    echartRef.value&&echartView.value.resize()
})
echartRef.value
</script>
<template>
  <div>
    <div class="echarts" ref="echartRef"></div>
    <!-- <div class="left"></div>
        <div class="center"></div>
        <div class="rught"></div> -->
  </div>
</template>
<style lang="less" scoped>
.echarts {
  width: 40vw;
  height: 50vh;
}
</style>
