<script setup>
import wsRequest from '@/service'
const SIZE = 1024*1024
const props = defineProps({})
let file
const fileChange = (e) => {
  file = e.target.files[0]
}
// 创建切片
const createFileChunk = (file, size = SIZE) => {
  const fileChunkList = []
  let cur = 0
  while (cur < file.size) {
    fileChunkList.push({ file: file.slice(cur, cur + size) })
    cur += size
  }
  return fileChunkList
}
// 上传切片
const uploadChunks = async (data) => {
  const requestList = data
    .map(({ chunk, hash }) => {
      const formData = new FormData()
      formData.append('chunk', chunk)
      formData.append('hash', hash)
      formData.append('filename', 'file')
      return { formData }
    })
    .map(({ formData }) => {
      wsRequest
        .post({
          url: '/upload/single',
          data: { fileInfo: formData },
          headers: {'Content-Type': 'multipart/form-data'},
        })
        .then((res) => {
          return Promise.resolve(res)
        })
    })
  // 并发请求
  await Promise.all(requestList).then(res=>{
    console.log(res);
  })
}
const submit = async () => {
  const fileChunkList = createFileChunk(file)
  let data = fileChunkList.map(({ file }, index) => ({
    chunk: file,
    // 文件名  数组下标
    hash: 'file-' + index
  }))
  await uploadChunks(data)
}
</script>
<template>
  <div>
    <input type="file" @change="fileChange" />
    <br />
    <button @click="submit">提交</button>
  </div>
</template>
<style lang="less" scoped></style>
