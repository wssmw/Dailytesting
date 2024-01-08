<template>
    <div class="table">
        <div class="operate">
            <el-button @click="refresh">刷新</el-button>
            <el-button>设置</el-button>
        </div>
        <el-table class="tableMain" :data="data" :height="200" border>
            <template v-for="item in columns" :key="item.id">
                <el-table-column 
                    :prop="item.prop" 
                    :label="item.label" 
                    :width="item.width" />
            </template>
        </el-table>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    columns:Array<any>,
    data:Array<any>
})
const emits = defineEmits([
    'refresh'
])
const refresh = () =>{
    emits('refresh')
}
</script>

<style scoped lang="less">
.table {
    display: flex;
    flex-direction: column;
    align-items: end;
    .operate {
        display: flex;
    }
    .tableMain {
        margin-top: 10px;
    }
}
</style>
  