<template>
    <scrollLoad
        :loading="loading"
        @loadMore="loadMoreHandle">
        <div v-for="item in data" :key="item.key" style="height: 100px;background-color: cornflowerblue;margin: 10px 0;">
            {{ item.title }}
        </div>
    </scrollLoad>
</template>
<script setup>
import scrollLoad from './scrollLoad.vue';
import { ref } from 'vue';
let loading=ref(false)
let data = ref([
    {
        title:'1',
        key:'1'
    },
    {
        title:'2',
        key:'2'
    },
    {
        title:'3',
        key:'3'
    },
    {
        title:'4',
        key:'4'
    },
    {
        title:'5',
        key:'5'
    },
    {
        title:'6',
        key:'6'
    },
    {
        title:'7',
        key:'7'
    },
    {
        title:'8',
        key:'8'
    },
    {
        title:'9',
        key:'9'
    },
    {
        title:'10',
        key:'10'
    },
])
const loadMoreHandle = (pageNo) =>{
    loading.value = true
    console.log(pageNo,'pageNo')
    setTimeout(()=>{
        for(let i = 1;i<=10;i++) {
            console.log(pageNo*10)
            data.value.push({
                title:pageNo*10+i,
                key:pageNo*10+i
            })
        }
        loading.value = false
        console.log('这里执行',pageNo)
    },1000)
}
</script>
<style scoped lang="scss">

</style>