<script setup lang="ts">
import { computed, ref } from 'vue';
import index from './views/滚动到底部自动加载更多数据/index.vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
let columns = ref([
  {
    prop:'date',
    label:'时间',
    width:100
  },
  {
    prop:'name',
    label:'姓名',
    width:100

  },
  {
    prop:'address',
    label:'地址',
    width:200
  },
])
let totalWidth=computed(()=>{
  let sum = 0
  columns.value.forEach(item=>{
    sum+=item.width
  })
  console.log(sum,'sum')
  return sum
})
const headerDragend = (a,b,c) =>{
  console.log(a,b,c)
  console.log(c.label,c.width)
  columns.value.forEach(item=>{
    if(item.label==c.label) {
      item.width = c.width
    }
  })
  console.log(columns.value)
}
</script>

<template>
  <!-- <index/> -->
   <div style="width: 600px;overflow: auto;">
     <div :style="{width: `${totalWidth}px`}">
       <el-table :data="tableData" style="width: 100%" border resizable @header-dragend="headerDragend">
         <template v-for="item in columns" :key="item.prop">
           <el-table-column :prop="item.prop" :label="item.label" :width="item.width" />
          </template>
        </el-table>
      </div>
    </div>
</template>

<style scoped lang="less">
.box {
  // margin: 20px;
}
</style>
