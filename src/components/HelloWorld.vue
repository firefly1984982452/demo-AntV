<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    AntV·让数据栩栩如生
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
