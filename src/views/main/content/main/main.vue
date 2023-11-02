<template>
  <div class="main">
    <div v-if="index == 1" class="ZNWD">
      <ZNWD />
    </div>
    <div v-else>
      <TableShow  class="tableshow"/>
    </div>
  </div>
</template>
<script>
import ZNWD from './ZNWD.vue'
import TableShow from './TableShow.vue'
export default {
  components: {
    ZNWD,
    TableShow,
    TableShow,
    ZNWD
  },
  props: ['index'],
  setup(props) {
    return {}
  }
}
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .ZNWD,.tableshow {
    width: 100%;
    height: 100%;
  }
}
</style>
