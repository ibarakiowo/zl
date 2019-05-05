<template>
  <el-container class="home-container">
    <el-header class="head-info">
      <img :src="logo" alt="好好吃饭" @click="backToHome">
    </el-header>
    <el-container class="body-info">
      <el-aside class="nav">
        <el-menu
          :default-active="currentNav"
          @select="routerToPage"
          background-color="#24292e"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/home/user">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/home/restaurant">
            <i class="el-icon-menu"></i>
            <span slot="title">饭店管理</span>
          </el-menu-item>
          <el-menu-item index="/404">
            <i class="el-icon-menu"></i>
            <span slot="title">其他管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <div class="home-view" v-if="currentNav == '/home'">首页内容</div>
        <router-view v-else></router-view>
      </el-main>
    </el-container>
  </el-container>
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
  },
  computed: {
    // 判断当前路由所处模块
    currentNav () {
      return this.$route.path
    }
  },
  methods: {
    // 点击logo回到首页
    backToHome () {
      this.$router.push('/home')
    },
    // 菜单跳转
    routerToPage (path) {
      this.$router.push({path})
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    height: 100%;
    .head-info {
      background: #eee;
      color: #fff;
      padding: 0;
      img {
        height: 100%;
      }
    }
    .body-info {
      .nav {
        background: #24292e;
        .el-menu {
          border-right: none;
          a {
            color: hsla(0,0%,100%,.7);
          }
        }
      }
    }
  }
</style>
