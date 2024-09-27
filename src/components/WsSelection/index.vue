<template>
    <div>
        <el-select v-model="selectValue">
            <el-option 
                v-for="item in selectList" 
                :key="item.value" 
                :value="item.value"
                :label="item.label"
                ></el-option>
        </el-select>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    value: String,
    selectList: Array,
    selectDefaultValue: String
})
const selectValue = ref(props.selectDefaultValue)
const emit = defineEmits(['input','update:vModel', 'remote-method'])
watch(selectValue, (newValue) => {
    console.log(newValue)
    emit('update:vModel', newValue);
})
</script>
<style scoped lang="scss">

</style>