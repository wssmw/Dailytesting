<template>
    <div class="scroll-load" ref="scrollLoad" @scroll="scrollHandle">
        <slot></slot>
        <div class="loading" v-if="loading">加载中</div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
    loading:Boolean
})
const emits = defineEmits([
    'loadMore'
])

const scrollLoad = ref()
const pageNo = ref(0)
const scrollHandle =async (e) =>{
    let { target } = e
    let { scrollHeight,scrollTop,offsetHeight } = target
    if(scrollHeight - scrollTop < offsetHeight+1) {
        pageNo.value = pageNo.value+1
        emits('loadMore', pageNo.value)
    }
}
</script>
<style scoped lang="less">
.scroll-load {
    height: 100vh;
    overflow: auto;
}
</style>