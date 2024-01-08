<template>
    <div class="searchslotbox" ref="searchslotbox" v-ClickOutSide="clickHandle">
        <el-form class="elform" :style="{
            width:openMore?'100%':`${maxNum/(maxNum+1)*100}%`,
            height:!openMore?'50px':'auto',
            position:openMore?'absolute':'',
            overflow:!openMore?'hidden':''
            }">
            <template v-for="(item,index) in searchFilterData" :key="item.type+index">
                <div class="item" :style="{width:openMore?`${1/(maxNum+1)*100}%`:`${1/maxNum*100}%`}">
                    <el-form-item :label="item.label" v-if="item.type=='input'">
                        <el-input size="small" v-model="item.value"/>
                    </el-form-item>
                    <el-form-item :label="item.label" v-else-if="item.type=='select'">
                        <el-select size="small"/>
                    </el-form-item>
                    <el-form-item :label="item.label" v-else-if="item.type=='datePicker'">
                        <el-date-picker size="small"/>
                    </el-form-item>
                    <el-form-item :label="item.label" v-else-if="item.type=='treeSelect'">
                        <el-tree-select size="small"/>
                    </el-form-item>
                </div>
            </template>
            <div v-if="openMore" class="item" style="float: right;">
                <el-button>重置</el-button>
                <el-button>查询</el-button>
                <el-button @click="openMore = false">高级查询</el-button>
            </div>
        </el-form>
        <div class="searchButton" v-if="!openMore">
            <el-button @click="searchHandle">搜索</el-button>
            <el-button @click="openMore=true">高级查询</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import { ClickOutside } from 'element-plus'

onMounted(()=>{
    const searchBoxWidth = searchslotbox.value?searchslotbox.value.offsetWidth:0
    console.log(searchBoxWidth)
    searchMaxNum.forEach((item)=>{
        if(item.max>=searchBoxWidth&&item.min<=searchBoxWidth){
            maxNum.value = item.normal
        }
    })
    console.log(maxNum)
})

const props = defineProps({
    searchFilterData:Array<any>,
})
const emits = defineEmits(['doSearch'])
const searchMaxNum = [
    {
        min: 0,
        max: 903,
        normal: 2,
        more: 2,
        class: 'normal-2-more-2'
    }, {
        min: 904,
        max: 1199,
        normal: 3,
        more: 3,
        class: 'normal-2-more-3'
    }, {
        min: 1200,
        max: 1519,
        normal: 3,
        more: 4,
        class: 'normal-3-more-4'
    }, {
        min: 1520,
        max: Number.MAX_SAFE_INTEGER,
        normal: 4,
        more: 5,
        class: 'normal-4-more-5'
    }
] 
const searchslotbox = ref()
// 最多能放多少个filter
const maxNum = ref(0)
// 控制搜索框是否展开
const openMore = ref(false)
// 当搜索框显示所有内容时，当点击其他区域，搜索框会关掉
const vClickOutSide = ClickOutside
const clickHandle = () =>{
    openMore.value = false
}

const searchHandle = () =>{
    emits('doSearch')
}

</script>

<style scoped lang="less">
.searchslotbox {
    position: relative;
    height: 31px;
    .elform {
        z-index: 9;
        background-color: white;
    }
    .item {
        display: inline-block;
        padding: 5px;
    }
    .searchButton {
        position: absolute;
        top: 0;
        right: 0px;
    }
}
</style>
  