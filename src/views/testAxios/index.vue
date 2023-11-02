<template>
  <div>
    <button @click="click">请求</button>
  </div>
</template>
<script>
import wsRequest from '@/service'
import LocalCache from '../../utils/cache'
export default {
  setup() {
    // axios.get('/search?keywords=海阔天空').then(res=>console.log(res))
    let click = () => {
      wsRequest
        .post({
          url: '/login',
          data: { username: 'qmw', password: '123456' },
          headers:{
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          console.log(res.token)
          LocalCache.setCache('token', res.token)
        })
    }
    return {
      click
    }
  }
}
</script>
<style lang="less" scoped></style>
