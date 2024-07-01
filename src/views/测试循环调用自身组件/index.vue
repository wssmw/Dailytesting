<template>
    <div>
        <el-tabs v-if="data.length>1">
            <el-tab-pane v-model="activeName" v-for="(item,index) in data" :key="item.key" :label="item.key">
                <div>{{ item.title }}</div>
                <el-button @click="refresh">刷新</el-button>
                <el-button @click="isShow[index] = true" v-if="item.children">是否加载下一层数据</el-button>
                <index :tableData="item.children" v-if="item.children&&isShow[index]"></index>
            </el-tab-pane>
        </el-tabs>
        <div v-else>
            <div v-for="item in data" :key="item.key">
                <div>{{ item.title }}</div>
                <el-button @click="refresh">刷新</el-button>
                <el-button @click="isShowMore = true" v-if="item.children">是否加载下一层数据</el-button>
                <index :tableData="item.children" v-if="item.children&&isShow[index]"></index>
            </div>
        </div>
    </div>
  </template>
<script setup>
import wsRequest from '@/api';
import { ref, onMounted } from 'vue'
const props = defineProps({
    tableData:Array
})
let data = ref(JSON.parse(JSON.stringify(props.tableData)))
const activeName = ref(data.value[0].key)
const isShow = ref(new Array(props.tableData.length).fill(false))
const isShowMore = ref(false)
const refresh = () =>{
    wsRequest
        .post({
          url: '/test',
        })
        .then((res) => {
          console.log(res.title)
        data.value[0].title = data.value[0].title+ res.title
        })
    console.log(activeName.value,data);
}
</script>

<style lang="less" scoped>

</style>
