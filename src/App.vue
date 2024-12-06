<script setup lang="ts">
import { ElMessage } from 'element-plus';
import index from './views/滚动到底部自动加载更多数据/index.vue'
const clickHandle= () =>{
    ElMessage('123')
}
</script>

<template>
    <div class="box">
        <index></index>
        <el-button @click="clickHandle">点击</el-button>
    </div>
</template>

<style scoped lang="less">
.box {
    // margin: 20px;
    height: 400px;
}
</style>
