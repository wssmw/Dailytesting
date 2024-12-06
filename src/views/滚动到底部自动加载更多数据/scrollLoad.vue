<template>
    <div class="scroll-load">
        <div class="mask" v-show="loading" v-loading="loading"></div>
        <div class="scroll-content" @scroll="scrollHandle">
            <div>
                <li v-for="(item, index) in tableData" :key="item.key || item.id || index">
                    <slot :item="item"></slot>
                </li>
            </div>
            <slot name="loading" v-if="loading">
                <div class="loading">加载中</div>
            </slot>
        </div>
    </div>
</template>
<script setup>
import wsRequest from '@/api'

import { ref } from 'vue'
const props = defineProps({
    pageSize: Number,
    url: String,
    loadMoreHandle: Function
})

const pageNo = ref(0)
const loading = ref(true)
let tableData = ref([])

const loadMore = (url) => {
    wsRequest
        .post({
            url,
            data: {
                pageNo: pageNo.value,
                pageSize: props.pageSize
            }
        })
        .then((res) => {
            tableData.value = tableData.value.concat(res)
            loading.value = false
            console.log(tableData)
        })
}
props.loadMoreHandle ? loadMoreHandle(props.url) : loadMore(props.url)

const scrollHandle = async (e) => {
    let { target } = e
    let { scrollHeight, scrollTop, offsetHeight } = target
    if (scrollHeight - scrollTop < offsetHeight + 1 && !loading.value) {
        pageNo.value = pageNo.value + 1
        loading.value = true
        props.loadMoreHandle ? loadMoreHandle(props.url) : loadMore(props.url)
    }
}
</script>
<style scoped lang="less">
.scroll-load {
    position: relative;
    height: 100%;
    .scroll-content {
        height: 100%;
        overflow: auto;
    }
    .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .loading {
        display: flex;
        justify-content: center;
    }
}
</style>
