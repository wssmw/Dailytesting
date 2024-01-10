<template>
  <div class="box">
    <!-- 搜索部分 -->
    <SearchSlotBox class="searchslotbox" v-if="searchFilterData" 
      :searchFilterData="searchFilterData"
      @doSearch="doSearch"
      />
    <!-- 中间操作按钮 -->
    <el-scrollbar style="height: auto;">
      <div style="display: flex;padding: 10px 0;">
        <template v-for="(item,index) in operateData" :key="item.name+index">
          <el-button @click="item.operate">{{ item.name }}</el-button>
        </template>
      </div>
      
    </el-scrollbar>
    <!-- table部分 -->
    <Table class="table" @refresh="doSearch" :columns="columns" :data="tableInfo.tableData"></Table>
    <!-- 分页部分 -->
    <el-pagination 
      class="pagination" 
      :page-size="pageInfo.pageSize" 
      :total="pageInfo.total"
      :page-sizes="[10,20,50,100]"
      layout="total,sizes, prev, pager, next"
      @current-change="currentPageChangeHndle"
      @size-change="sizeChangeHandle"
      ></el-pagination>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from "vue"
const props = defineProps({
  abc:Number,
  request:{
    type:Function,
    required:true
  },
  dataUrl:{
    type:String,
    required:true
  },
  columns:Array,
  searchFilterData:Array,
  operateData:Array
})
const emits = defineEmits(['request'])
const tableInfo = reactive({
  tableData:[]
})
// 分页器信息
const pageInfo = reactive({ 
  pageSize: 10,
  currentPage: 1,
  total: 100,
})
// 分页器当前页数修改时触发
const currentPageChangeHndle = (value:any) =>{
  pageInfo.currentPage = value
  doSearch() 
}
const sizeChangeHandle = (value:any) =>{
  pageInfo.pageSize = value
  pageInfo.currentPage = 1
  doSearch() 
}

const searchFilterDataParams = computed(()=>{
  let _obj:any = {}
  props.searchFilterData?.forEach((item:any)=>{
    _obj[item.key] = item.value
  })
  return _obj
})
const doSearch = async () =>{
  console.log(searchFilterDataParams.value);
  
  await props.request?.apply(null,[{
    url: props.dataUrl ,
    data: {
      pageSize: pageInfo.pageSize,
      currentPage: pageInfo.currentPage,
      ...searchFilterDataParams.value
    },
  }]).then((res:any)=>{
    tableInfo.tableData = res.data
    pageInfo.total = res.total==undefined? 100 : res.total
  })
  console.log(pageInfo.total)
}
onMounted(()=>{
  doSearch()
})
</script>

<style scoped lang="less">
.box {
  min-width: 600px;
  padding: 5px;
  .searchslotbox {
  }
  .table {
    display: flex;
  }
  .pagination {
    margin: 5px;
    width: 600px;
  }
}
</style>
