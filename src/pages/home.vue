<template>
  <div>
    <div>用户名：<input type="text" v-model="loginParams.username"></div>
    <div>密码：<input type="password" v-model="loginParams.password"></div>
    <button @click="handleLogin">登录</button>
    <button @click="fetchList">获取饭店列表</button>
  </div>
</template>

<script>
import api from '@/api/apitest'

export default {
  data () {
    return {
      loginParams: {
        username: '',
        password: ''
      },
      tempToken: ''
    }
  },
  created () {
  },
  methods: {
    handleLogin () {
      api.testApi(this.loginParams).then(res => {
        alert('登录成功')
        this.tempToken = res.token
      })
    },
    fetchList () {
      api.testApi2({}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>
