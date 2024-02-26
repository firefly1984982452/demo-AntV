import { createApp } from 'vue'
import router from './router/router.js'
import './style.css'
import './assets/main.css'
import App from './App.vue'

// 创建根组件
const app = createApp(App)
app.use(router)
app.mount('#app')
