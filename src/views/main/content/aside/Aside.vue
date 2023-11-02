<template>
  <div class="aside">
    <el-col>
      <div class="title">首页</div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        :collapse = 'iscollapse'
      >
        <el-menu-item index="1" @click = 'itemClick'>
          <span>智能问答</span>
        </el-menu-item>
        <el-menu-item index="2"  @click = 'itemClick'>
          <span>图表展示</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
    emits:['click'],
  setup(props,{emit}) {
    const iscollapse = ref(false)
    const itemClick = (e) =>{
        emit('click',e.index)
    }
    return {
        iscollapse,
        itemClick
    }
  }
}
</script>
<style lang="less" scoped>
.aside {
    .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 30px;
    }
}
</style>
