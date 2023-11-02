<template>
  <div>
    <template v-for="(item, index) in component">
      <button @click="change(index)">{{ item }}</button>
    </template>

    <KeepAlive>
      <component :is="current" />
    </KeepAlive>
  </div>
</template>
<script>
import { ref } from 'vue'
import Count1 from './page/Count1.vue'
import Count2 from './page/Count2.vue'
export default {
  components: {
    Count1,
    Count2
  },
  setup() {
    const component = ['Count1', 'Count2']
    const current = ref(component[0])
    const change = (index) => {
      console.log(index)
      current.value = component[index]
    }
    return {
      current,
      change,
      component,
      Count1,
      Count2
    }
  }
}
</script>
<style lang="less" scoped></style>
