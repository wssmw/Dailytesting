import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/index.css'
import 'element-plus/theme-chalk/el-loading.css';



const app = createApp(App)
console.log(app,'app')
app.use(createPinia())
app.use(router)

app.mount('#app')
