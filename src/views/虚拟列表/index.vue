<template>
    <div class="virtualScrolling" ref="virtualScrolling" @scroll="scrollHandle">
        <div class="bg" :style="{ height: `${totalHeight}px` }"></div>
        <div class="content" ref="content" :style="{ transform: gettransfrom }">
            <template v-for="item in realData">
                <slot :item="item"> </slot>
            </template>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref, useSlots } from 'vue'
const { data } = defineProps({
    data: Array
})
const content = ref()
const virtualScrolling = ref()
// 可视区域总高度
const visibleAreaHeight = ref(0)
// 可视区域数量
const visibleCount = ref(0)
// 单个item的高度
const itemHeight = ref(0)
// 起始索引
const startIndex = ref(0)
// 结束索引
const endIndex = ref(10)
// 数据量
const dataLength = ref(data.length)

const realData = computed(() => data.slice(startIndex.value, endIndex.value))

const totalHeight = ref(0)

const startOffset = ref()
const gettransfrom = computed(() => `translate3d(0,${startOffset.value}px,0)`)

onMounted(() => {
    itemHeight.value = content.value.children[0].clientHeight
    if (virtualScrolling.value) {
        visibleAreaHeight.value = virtualScrolling.value.offsetHeight
        visibleCount.value = Math.ceil(visibleAreaHeight.value / itemHeight.value)
        endIndex.value = startIndex.value + visibleCount.value + 1
        totalHeight.value = dataLength.value * itemHeight.value
    }
})

const scrollHandle = (e) => {
    let scrollTop = e.target.scrollTop
    startIndex.value = Math.floor(scrollTop / itemHeight.value)
    endIndex.value = startIndex.value + visibleCount.value + 1
    startOffset.value = scrollTop - (scrollTop % itemHeight.value)

    console.log(startIndex.value, endIndex.value)
    console.log(realData.value)
}
</script>
<style scoped lang="less">
.virtualScrolling {
    height: 100%;
    overflow: auto;
    position: relative;
    overflow-anchor: none;
    .bg {
        float: left;
    }
    .content {
        overflow-anchor: none;
    }
}
</style>
