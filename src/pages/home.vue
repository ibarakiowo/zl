<template>
  <el-container class="home-container">
    <el-header class="head-info">
      <img :src="logo" alt="好好吃饭" @click="backToHome">
    </el-header>
    <el-container class="body-info">
      <el-aside
        width="auto"
        class="nav">
        <div class="nav-unfold" :class="{'nav-fold': collapseNav}">
          <i :class="collapseNav ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="foldNav"></i>
        </div>
        <el-menu
          :class="{'el-menu-unfold': !collapseNav}"
          :default-active="currentNav"
          @select="routerToPage"
          :collapse="collapseNav"
          :collapse-transition="false"
          background-color="#24292e"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/home/user">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/home/restaurant">
            <i class="el-icon-office-building"></i>
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
      logo,
      collapseNav: false
    }
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
    // 折叠菜单栏
    foldNav () {
      this.collapseNav = !this.collapseNav
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
        .nav-unfold {
          height: $nav-nh;
          line-height: $nav-nh;
          font-size: $nav-fs;
          text-align: right;
          color: #fff;
          padding-right: 4px;
          background: #0a0b0c;
          i {
            cursor: pointer;
          }
        }
        .nav-fold {
          padding: 0;
          text-align: center;
        }
        .el-menu {
          border-right: none;
        }
        .el-menu-unfold {
          width: $nav-nw;
        }
      }
      .main {
        padding: $com-bp;
      }
    }
  }
</style>
