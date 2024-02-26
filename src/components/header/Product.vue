<template>
  <div class="popup-list-all">
    <ul>
      <li v-for="(item,index) in dataList" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
// const productData = require('./product.json');
// import data from './product.json'
// console.log(data)
defineComponent({
  name: 'Product',
})
// const dataList = productData

</script>
<style scoped lang="scss"></style>
