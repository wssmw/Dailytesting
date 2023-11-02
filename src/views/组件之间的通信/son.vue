<template>
  <div>
    <h2>son组件</h2>
    <h2>祖先组件传递的数据:{{ appnums }}</h2>
    <h2>父组件传递的数据:{{ itemData }}</h2>
    <button @click="click">按钮</button>
    <h2>自身组件的数据：{{ nums }}</h2>
  </div>
</template>
<script>
import { ref } from 'vue'
import { inject } from 'vue'
export default {
  props: ['itemData'],
  emits: ['click'],
  setup(props, { emit }) {
    const appnums = inject('appnums')
    const nums = ref(0)
    const add = () => {
      nums.value++
    }
    console.log(emit);
    const click = () => {
      emit('click')
    }
    return {
      appnums,
      nums,
      add,
      click
    }
  }
}
</script>
<style lang="less" scoped></style>
