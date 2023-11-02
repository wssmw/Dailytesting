<template>
  <div>
    <h2>Count2</h2>
    <h2>{{ num }}</h2>
    <button @click="change(true)">+1</button>
    <button @click="change(false)">-1</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const num = ref(0)
    const change = (isadd) => {
      if (isadd) {
        num.value++
      } else {
        num.value--
      }
    }
    return {
      num,
      change
    }
  }
}
</script>
<style lang="less" scoped></style>
