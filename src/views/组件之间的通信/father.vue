<template>
  <div class="father">
    <div class="fat">
      <h2>father组件</h2>
      <button @click="sonClick">按钮</button>
    </div>

    <son ref="sonRef" class="son" :itemData="itemData" @click="additemData" />
  </div>
</template>
<script>
import son from './son.vue'
import { ref } from 'vue'
export default {
  components: {
    son
  },
  setup() {
    const itemData = ref(10)
    const sonRef = ref()
    // console.log(this.$children[0]);
    const sonClick = () => {
      console.log(sonRef.value)
      sonRef.value.add()
    }
    const additemData = () => {
      itemData.value++
    }
    return {
      sonRef,
      itemData,
      sonClick,
      additemData
    }
  }
}
</script>
<style lang="less" scoped>
.father {
  display: flex;
  width: 800px;
  height: 400px;
  margin: 0 auto;
  background-color: pink;
  .fat {
    flex: 1;
    background-color: orange;
    text-align: center;
  }
  .son {
    flex: 1;
    text-align: center;
  }
}
</style>
