<script setup>
import { computed,ref } from "vue";
   const props = defineProps({

   })
//    const message = ref('我和我的祖国')
//    const newmessage = computed(()=>{
//     // 正则表达式
//     const _reg = new RegExp('我','g')
//     return message.value.replace(_reg,'<span class="active">你</span>')
//    })
   

    // 进化版
   const message = ref('我和我的祖国')
   const newmessage = computed(()=>heightLight('我',message.value))
   const heightLight = (keyword,message) =>message.replace(new RegExp(keyword,'g'),`<span class='active'>${keyword}</span>`)
</script>
<template>
    <div>
        <el-input v-model="message"></el-input>
        <!-- 注意这里用的v-html，其中的css样式需要去掉scoped，否则不生效 -->
        <div v-html="newmessage"></div>
    </div>
</template>
<style lang='less'>
.active {
    color:red;
}
</style>
