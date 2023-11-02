<template>
  <div class="ZNWD">
    <div class="ipt">
      <el-input
        class="input"
        v-model="input"
        placeholder="Please input"
        clearable
      />
    </div>
    <div class="content">content</div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const input = ref('')
    return {
      input
    }
  }
}
</script>
<style lang="less" scoped>
.ZNWD {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .ipt {
    width: 80%;
    height: 50px;
    background-color: pink;
    .input {
      font-size: 20px;
      height: 100%;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    background-color: blue;
  }
}
</style>
