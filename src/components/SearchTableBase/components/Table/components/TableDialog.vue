<template>
    <div class="modal">
        <el-dialog v-model="dialogVisible" title="自定义列表项">
            <el-checkbox-group v-model="checkList" >
                <template v-for="item in columns" :key="item.label">
                    <el-checkbox :label="item.label"></el-checkbox>
                </template>
            </el-checkbox-group>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button @click="handleClose">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    columns:Array<any>,
})
const emits = defineEmits([
    'columnsChangeHandle'
])

const dialogVisible = ref(false)
const checkList = ref(props.columns?.map((item)=>item.label))

const openDialog = () =>{
    dialogVisible.value = true
}

const handleClose = () =>{
    emits('columnsChangeHandle',checkList.value)
    dialogVisible.value = false
}

defineExpose({
    openDialog
})
</script>

<style scoped lang="less">
</style>
  