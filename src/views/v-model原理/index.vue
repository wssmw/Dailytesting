<template>
  <div>
    <h2>11</h2>
    <input type="text" @input="ValueChange" placeholder="haha">
    <h2>{{ value }}</h2>
    <p class="text-6xl  text-red-700">Hello!</p>
    <el-button>Default</el-button>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('')
    const ValueChange = (e) =>{
        console.log(e.data);
        value.value+=e.data
    }
    return {
        value,
        ValueChange
    }
  }
}
</script>
<style lang="less" scoped></style>
