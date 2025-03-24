<template>
    <div style="width: 400px">
        <FormEnhance
            ref="formEnhanceRef"
            :formConfig="formConfig"
            :formData="formData"
        ></FormEnhance>
        <el-button @click="clickHandle">提交</el-button>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import FormEnhance from './components/FormEnhance/index.vue'

// 表单数据
const formData = ref({
    name: '', //活动名称
    region: '', //活动区域
    date1: '', // 活动时间
    delivery: false, // 开关
    type: [], // 活动性质
    resource: '', // 活动资源
    desc: '' // 活动形式
})
// 表单配置
const formConfig = [
    // 活动名称
    {
        key: 'name',
        type: 'input',
        label: '活动名称',
        placeholder: '请输入活动名称',
        rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
    },

    // 活动区域
    {
        key: 'region',
        type: 'select',
        label: '活动区域',
        placeholder: '请选择活动区域',
        options: [],
        rules: [{ required: true, message: '请选择活动区域', trigger: 'blur' }]
    },

    // 活动时间 (日期+分隔符+时间)
    {
        key: 'date1',
        type: 'date',
        label: '活动时间',
        placeholder: '选择日期',
        rules: [{ required: true, message: '请选择活动时间', trigger: 'change' }]
    },

    // 即时配送
    {
        key: 'delivery',
        type: 'switch',
        label: '即时配送'
    },

    // 活动性质
    {
        key: 'type',
        type: 'checkbox-group',
        label: '活动性质',
        options: [
            { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
            { label: '地推活动', value: '地推活动' },
            { label: '线下主题活动', value: '线下主题活动' },
            { label: '单纯品牌曝光', value: '单纯品牌曝光' }
        ],
        rules: [{ required: true, message: '请选择活动性质', trigger: 'blur' }]
    },
    // 特殊资源
    {
        key: 'resource',
        type: 'radio-group',
        label: '特殊资源',
        options: [
            { label: '线上品牌商赞助', value: '线上品牌商赞助' },
            { label: '线下场地免费', value: '线下场地免费' }
        ],
        rules: [{ required: true, message: '请选择', trigger: 'blur' }]
    },

    // 活动形式
    {
        key: 'desc',
        type: 'textarea',
        label: '活动形式',
        placeholder: '请输入活动形式',
        rules: [{ required: true, message: '请输入活动形式', trigger: 'blur' }]
    }
]

const formEnhanceRef = ref()
const clickHandle = () => {
    console.log(formData.value)
    formEnhanceRef.value.validate().then(() => {
        console.log('校验成功')
    })
    console.log(formData.value)
}

onMounted(() => {
    setTimeout(() => {
        formConfig[1].options = [
            { label: '区域一', value: '区域一' },
            { label: '区域二', value: '区域二' }
        ]
    }, 200)
})
</script>
<style scoped lang="scss"></style>
