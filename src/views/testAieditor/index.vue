<template>
    <el-button @click="clickHandle">
        点击
    </el-button>
    <div ref="divRef" style="height: 600px"/>
    <div v-html="html" class="aie-content"></div>
  </template>
  
  <script setup>
  import {AiEditor} from "aieditor";
  import "aieditor/dist/style.css"
  import {onMounted, onUnmounted, ref} from "vue";
  
  const divRef = ref();
  let aiEditor
  let html = ref()
  onMounted(() => {
    aiEditor = new AiEditor({
      element: divRef.value,
      placeholder: "点击输入内容...",
    })
  })
  const clickHandle = () =>{
    html.value = aiEditor.getHtml()
    console.log(html.value)
  }
  onUnmounted(() => {
    aiEditor && aiEditor.destroy();
  })
  </script>