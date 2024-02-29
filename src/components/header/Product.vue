<template>
  <div class="product-page">
    <ul>
      <li v-for="(item, index) in newProductData" :key="index">
        <p class="title-text">{{ filterProductType(item.title) }}</p>
        <div class="children-box">
          <div class="product" v-for="(val, i) in item.children" :key="i">
            <img :src="val.icon" alt="" srcset="">
            <section class="content">
              <p class="product-title">{{ val.title }} {{ val.slogan }}</p>
              <p class="description">{{ val.description }}</p>
              <p class="link">
                <a :href="val.homeURL" target="_blank">产品首页</a>
                <a :href="val.exampleURL" target="_blank">图表示例</a>
              </p>
            </section>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
const productData = require('./product.json');
let newProductData: any[] = [];
defineComponent({
  name: 'Product',
})
const deepProductData = () => {
  let categoryList = [...new Set(productData.map((v: any) => v.category))]
  newProductData = categoryList.map((v: any) => {
    let childrenArr = productData
      .filter((i: any) => i.category === v && i.lang === 'zh')
      .map((p: any) => {
        p.homeURL = JSON.parse(p.links)?.home?.url || ''
        p.exampleURL = JSON.parse(p.links)?.example?.url || ''
        return p;
      })
    return {
      title: v,
      children: childrenArr
    }
  })
  console.log(newProductData)
}

deepProductData();
const filterProductType = (val: string) => {
  const productCategoryMap = {
    basic: '标准版基础产品',
    extension: '标准版扩展产品',
    mobile: '移动定制（F版）产品',
    ecology: '周边生态'
  }
  return productCategoryMap[val]
}
</script>
<style scoped lang="scss">
.product-page {
  background-color: #fff;
  padding: 20px 40px;

  ul {
    li {
      .title-text {
        height: 30px;
        line-height: 30px;
        color: #8e8e8e;
        border-bottom: 1px solid #eee;
      }

      .children-box {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        padding: 20px;

        .product {
          width: 100%;
          display: flex;
          gap: 10px;

          img {
            width: 32px;
            height: 32px;
          }

          .content {

            .product-title {

              color: #000;

            }

            .description {
              color: #8e8e8e;
              margin: 10px 0;

            }

            .link {
              a {
                color: #5e35f5;
                text-decoration: none;

                &:first-child {
                  margin-right: 10px;
                }

                &:active,
                &:visited {
                  color: #5e35f5;
                }
              }
            }
          }

        }
      }
    }
  }
}

@media screen and (min-width:0px) and (max-width:800px) {
  .product-page ul li .children-box {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
