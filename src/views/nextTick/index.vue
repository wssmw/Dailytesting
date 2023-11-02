<template>
    <div>
        <h2>{{ num }}</h2>
        <button @click="change(1)">+1</button>
        <button @click="change(0)">-1</button>
    </div>
</template>
<script>
import { ref,nextTick } from 'vue';

export default {
   setup() {
    const num =ref(0)
    const change =async (isadd) =>{
        if(isadd){
            num.value++
        }else {
            num.value--
        }
        // await nextTick()
        console.log(document.querySelector('h2').innerHTML);
    }
      return {
        num,
        change
      }
   },
}
</script>
<style lang='less' scoped>

</style>
