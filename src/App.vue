<script setup lang="ts">
import index from './views/v-model原理/index.vue'
import { getMvList } from "@/api/modules/test.ts";


getMvList().then(res=>{
  console.log(res);
  
})
</script>

<template>
  <div>
    <index/>
  </div>
</template>

<style scoped>
</style>
