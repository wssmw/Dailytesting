<template>
    <div>
        <el-tabs v-if="data.length>1">
            <el-tab-pane v-model="activeName" v-for="(item,index) in data" :key="item.key" :label="item.key">
                <div>{{ item.title }}</div>
                <el-button @click="refresh">刷新</el-button>
                <el-button @click="isShow[index] = true" v-if="item.children">是否加载下一层数据</el-button>
                <index :tableData="item.children" v-if="item.children&&isShow[index]"></index>
            </el-tab-pane>
        </el-tabs>
        <div v-else>
            <div v-for="item in data" :key="item.key">
                <div>{{ item.title }}</div>
                <el-button @click="refresh">刷新</el-button>
                <el-button @click="isShowMore = true" v-if="item.children">是否加载下一层数据</el-button>
                <index :tableData="item.children" v-if="item.children&&isShow[index]"></index>
            </div>
        </div>
    </div>
  </template>
<script setup>
import wsRequest from '@/api';
import { ref, onMounted } from 'vue'
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
let data = ref(JSON.parse(JSON.stringify(tableData)))
const activeName = ref(data.value[0].key)
const isShow = ref(new Array(tableData.length).fill(false))
const isShowMore = ref(false)
const refresh = () =>{
    wsRequest
        .post({
          url: '/test',
        })
        .then((res) => {
          console.log(res.title)
        data.value[0].title = data.value[0].title+ res.title
        })
    console.log(activeName.value,data);
}
</script>

<style lang="less" scoped>

</style>
