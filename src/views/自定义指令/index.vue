<template>
    <div>
        <input type="text" name="" id="" v-focus:foo="abc">
        <p v-color>ajahjahha</p>
    </div>
  </template>
  <script>
  export default {
    directives:{
        focus:{
            mounted: (el,binding,vnodee,prevVNode) => {
                console.log(el);
                console.log(binding);
                console.log(vnodee);
                console.log(prevVNode);
                return el.focus()
            }
        }
    },
    setup() {

      return {

      }
    }
  }
  </script>
  <style lang="less" scoped>

  </style>
