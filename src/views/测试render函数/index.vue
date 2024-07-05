<template>
    <div>
      <el-button>111</el-button>
      <renderButton :abc="'123'"/>
    </div>
  </template>
   
  <script setup>
  import { h, ref } from "vue";
  import { ElButton as sbutton } from 'element-plus'
  const renderButton =(a)=> {
    console.log(a)
      return h(
        // 1. 要渲染的标签名称：第一个参数【必需】
        sbutton,
        // 2. 渲染标签的属性：第二个参数【可选】
        {
        },
        // 3. 渲染标签的子元素数组：第三个参数【可选】
        '按钮'
      )
  };
  let num = ref(0);  // vue3中需要使用ref或reactive声明变量，否则无法实现双向数据绑定
  const changeNum = () => {
    num.value++    // 改变ref定义的变量值需要使用.value , reactive不需要 
  }
   console.log(renderButton())
  </script>