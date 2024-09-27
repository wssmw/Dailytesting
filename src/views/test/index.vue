<template>
  <div>
    123
    <WsSelection v-model="selectValue" :selectList="selectList"></WsSelection>
    <el-button @click="clickHandle">点击</el-button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const selectList = [
  {
    label:'1',
    value:'1'
  },
  {
    label:'2',
    value:'2'
  },
  {
    label:'3',
    value:'3'
  }
]
let selectValue = ref('2')
const clickHandle = () =>{
  console.log(selectValue.value)
}
</script>
<style scoped lang="scss">

</style>