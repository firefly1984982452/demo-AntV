import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/main/Main.vue'),
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})

export default router
