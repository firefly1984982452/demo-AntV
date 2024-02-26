<template>
  <header>
    <p @click="login">去登录</p>
    <p @click="main">去主页</p>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
defineComponent({
  name: 'TopBar',
})
const login = () => {
  router.push('/login')
}
const main = () => {
  router.push('/main')
}

</script>
<style scoped>
</style>
