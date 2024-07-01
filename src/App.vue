<script setup lang="ts">
import index from './views/测试循环调用自身组件/index.vue'
const  tableData = [
    {
        value:'a',
        key:'a',
        title:'a',
        children:[
            {
                value:'a1',
                key:'a1',
                title:'a1',
                children:[
                  {
                    title:'a11',
                    value:'a11',
                    key:'a11'

                  },
                  {
                    title:'a12',
                    value:'a12',
                    key:'a12'
                  }
                ]
            },
            {
              title:'a2',
                value:'a2',
                key:'a2'
            },
            {
              title:'a3',
              value:'a3',
              key:'a3',
              children:[
                {
                  title:'a31',
                  key:'a31',
                  value:'a31'
                },
                {
                  title:'a32',
                  key:'a32',
                  value:'a32'
                },
                {
                  title:'a33',
                  key:'a33',
                  value:'a33'
                }
              ]
            }
        ],
    },
    {
      title:'b',
        value:'b',
        key:'b',
    },
    {
      title:'c',
        value:'c',
        key:'c',
        children:[
            {
              title:'c1',
                value:'c1',
                key:'c1'
            },
            {
              title:'c2',
                value:'c2',
                key:'c2'
            },
        ]
    },
]
</script>

<template>
  <index class="box" :tableData="tableData"/>
</template>

<style scoped lang="less">
.box {
padding: 20px;
}
</style>
