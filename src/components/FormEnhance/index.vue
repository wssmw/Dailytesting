<template>
    <div>
        <el-form ref="formRef" :model="formData">
            <el-form-item
                v-for="item in formConfig"
                :key="item.key"
                :label="item.label"
                :prop="item.key"
                :rules="item.rules"
                ref="formItemRef"
            >
                <el-input v-if="item.type == 'input'" v-model="formData[item.key]"></el-input>
                <el-select v-else-if="item.type == 'select'" v-model="formData[item.key]">
                    <el-option
                        v-for="(option, index) in item.options"
                        :key="index"
                        :label="option.label"
                        :value="option.value"
                    ></el-option>
                </el-select>
                <el-date-picker
                    v-else-if="item.type == 'date'"
                    v-model="formData[item.key]"
                    :type="item.type"
                ></el-date-picker>
                <el-switch
                    v-else-if="item.type == 'switch'"
                    v-model="formData[item.key]"
                ></el-switch>
                <el-checkbox-group
                    v-else-if="item.type == 'checkbox-group'"
                    v-model="formData[item.key]"
                >
                    <el-checkbox
                        v-for="(option, index) in item.options"
                        :key="index"
                        :label="option.value"
                        >{{ option.label }}</el-checkbox
                    >
                </el-checkbox-group>
                <el-radio-group v-else-if="item.type == 'radio-group'" v-model="formData[item.key]">
                    <el-radio
                        v-for="(option, index) in item.options"
                        :key="index"
                        :label="option.value"
                        >{{ option.label }}</el-radio
                    >
                </el-radio-group>
                <el-input
                    v-else-if="item.type == 'textarea'"
                    v-model="formData[item.key]"
                ></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
    formConfig: {
        type: Array,
        default: []
    },
    formData: {
        type: Object,
        default: () => {}
    }
})

const formRef = ref()
const validate = () => {
    return new Promise((resolve, reject) => {
        formRef.value.validate((valid, invalidFields) => {
            if (valid) {
                resolve(true)
            } else {
                reject(invalidFields)
            }
        })
    })
}

defineExpose({
    validate
})
</script>
<style scoped lang="less"></style>
