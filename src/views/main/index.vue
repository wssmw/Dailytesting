<template>
  <div class="box">
    <el-container class="container">
      <el-aside class="aside" >
        <Aside @click = 'itemChange'/>
      </el-aside>
      <el-main class="main">
        <Main :index="index"/>
      </el-main>
    </el-container>

  </div>
</template>
<script>
import { ref } from 'vue'
import Aside from './content/aside/Aside.vue'
import Main from './content/main/main.vue'
export default {
  components:{
    Aside,
    Main
  },
  setup() {
    const index=ref(1)
    const itemChange = (s) =>{
      index.value = s
    }
    return {
      index,
      itemChange
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  height: 100vh;
  .container {
    height: 100%;
    .aside {
    background-color: red;
  }
  .main {
    background-color: orange;
  }
  }


}
</style>
