<template>
    <div class="table">
        <div class="operate">
            <el-button @click="refresh">刷新</el-button>
            <el-button @click="openDialog">设置</el-button>
        </div>
        <TableDialog ref="tableDialogRef" :columns="columns" @columnsChangeHandle="columnsChangeHandle"></TableDialog>
        <el-table class="tableMain" :data="data" :height="200" border>
            <template v-for="item in realColumns" :key="item.id">
                <el-table-column 
                    :prop="item.prop" 
                    :label="item.label" 
                    :width="item.width">
                    <template v-if="item.render">
                        <render :params="item" :render="item.render"></render>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { computed, ref,h } from "vue"
import { ElButton as sbutton } from 'element-plus'
const props = defineProps({
    columns:Array<any>,
    data:Array<any>
})
const columnCheckList = ref(props.columns?.map((item)=>item.label))
const realColumns = computed(()=>props.columns?.filter((item:any)=>columnCheckList.value?.includes(item.label)))
const columnsChangeHandle = (value:any) =>{
    console.log(value);
    columnCheckList.value = value
}

const emits = defineEmits([
    'refresh'
])
// 刷新
const refresh = () =>{
    emits('refresh')
}
const tableDialogRef = ref()
// 打开设置
const openDialog = () =>{
    tableDialogRef.value.openDialog()
}
const render =(e)=> {
    return e.render(e.params,h)
};
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
  