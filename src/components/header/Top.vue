<template>
  <header>
    <img :src="logoURL" class="logo">
    <nav>
      <ul>
        <li @click="login"><a>设计语言</a></li>
        <li @click="main"><a>场景案例</a></li>
        <li @click="login"><a>提交Issue</a></li>
        <li @click="showProductFn" @mouseenter="showProductFn" @mouseleave="showProductFn"><a>所有产品<i
              class="iconfont icon-antvzhankai1"></i></a></li>
        <li @click="login"><i class="iconfont icon-antvzhongyingwen"></i></li>
        <li @click="login">
          <Popover content={content} title="微信扫一扫关注">
            <i class="iconfont icon-antvwechat"></i>
          </Popover>
        </li>
        <li @click="login"><i class="iconfont icon-antvgithub"></i></li>
      </ul>
      <!-- <QRCode value="文字" /> -->
    </nav>
  </header>
  <div class="popup-list-all" v-show="showProductList">
    <Product />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Popover, QRCode } from 'ant-design-vue';
import Product from './Product.vue';
const router = useRouter()
const logoURL = ref('https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*A-lcQbVTpjwAAAAAAAAAAAAADmJ7AQ/original')
defineComponent({
  name: 'TopBar',
})
const showProductList = ref(false);
const showProductFn = () => {
  showProductList.value = !showProductList.value;
}
const login = () => {
  router.push('/login')
}
const main = () => {
  router.push('/main')
}

</script>
<style scoped lang="scss">
header {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbf5fe;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);

  .logo {
    height: 30px;
  }

  nav {
    ul {
      display: flex;

      li {
        color: #424e66;

        &:not(:last-child) {
          margin-right: 8px;
        }

        font-size: 16px;
        display: inline-block;
        transition: box-shadow .3s;
        box-shadow: 0 2px 0 transparent inset;

        a,
        i {
          cursor: pointer;
          box-sizing: border-box;
          padding: 0 12px;
          height: 32px;
          line-height: 32px;
          transition: all .3s;
          display: flex;
          border-radius: 6px;
        }

        i {
          padding: 0 8px;
          font-size: 16px;
        }

        &:hover {
          background-color: #fff;
          box-shadow: 0 8px 18px #0000000d;
        }

        .icon-antvzhankai1 {
          font-size: 6px;
          margin-left: 2px;
          width: 14px;
        }
      }
    }
  }
}

.popup-list-all {
  height: 100%;
  transition: all .5s;
  background-color: rgba(0, 0, 0, .1);
}
</style>
