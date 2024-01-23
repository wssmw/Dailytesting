<script setup lang="ts">
import WsRequest from '@/api'
import { reactive } from 'vue'


const request = ( params:any ) =>{
  return new Promise((resolve,reject)=>{
    WsRequest.post({...params}).then((res:any)=>{
      resolve(res)
    }).catch((err:any)=>{
      reject(err)
    })
  })
}
const columns = [
  {
    label:'id',
    prop:'id'
  },
  {
    label:'firstname',
    prop:'firstname'
  },
  {
    label:'lastname',
    prop:'lastname'
  }
]
const batchDel = (value:any) =>{
  console.log(value);
  
}
const operateData = [
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
  {
    main: true,
    name: '批量删除任务',
    opcode: 'batchDel',
    operate: batchDel
  },
]

const searchFilterData = reactive([
  {
    label:'哈哈哈哈哈哈哈',
    type:'input',
    key:'aaa'
  },
  {
    label:'2',
    type:'select',
    key:'bbb'
  },
  {
    label:'3',
    type:'datePicker',
    key:'ccc'
  },
  {
    label:'4',
    type:'treeSelect',
    key:'ddd'
  },
  {
    label:'5',
    type:'datePicker',
    key:'eee'
  },
  {
    label:'6',
    type:'treeSelect',
    key:'fff'
  },
])
</script>

<template>
  <div class="box">
    <SearchTableBase 
      :columns="columns"
      :searchFilterData="searchFilterData"
      :request="request" 
      :operateData="operateData"
      dataUrl="/test"
      />
  </div>
</template>

<style scoped>
.box {
  /* width: 1000px; */
  height: 400px;
}
</style>
