import { createApp } from 'vue'
import router from './router/router.js'
import './style.css'
import './assets/main.css'
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')
