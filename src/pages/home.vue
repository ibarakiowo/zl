<template>
  <div class="home-container">
    <div class="head-info">
      <img :src="logo" alt="好好吃饭" @click="backToHome">
    </div>
    <div class="body-info">
      <ul class="nav">
        <li><router-link to="/home/user">用户管理 ></router-link></li>
      </ul>
      <div class="main">
        <router-view></router-view>
        <div class="home-view">首页内容</div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/images/logo1.png'
export default {
  data () {
    return {
      logo
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    // 点击logo回到首页
    backToHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    width: 100%;
    height: 100%;
    .head-info {
      height: 50px;
      background: #eee;
      color: #fff;
      img {
        height: 100%;
      }
    }
    .body-info {
      height: calc(100vh - 50px);
      display: flex;
      .nav {
        padding: 10px 0;
        width: 200px;
        background: #24292e;
        li {
          padding: 10px;
          a {
            color: hsla(0,0%,100%,.7);
          }
        }
      }
      .main {
        flex: 1;
      }
    }
  }
</style>
