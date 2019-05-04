<template>
  <div class="login-container">
    <div class="login-form">
      <h1>用户<img :src="logo">登录</h1>
      <ul>
        <li><label>账号：</label><input type="text" v-model="loginParams.username"></li>
        <li><label>密码：</label><input type="password" v-model="loginParams.password"></li>
      </ul>
      <div><button @click="handleLogin">登录</button></div>
    </div>
  </div>
</template>

<script>
import api from '@/api/api-login'
import logo from '@/assets/images/logo1.png'
export default {
  name: 'login',
  data () {
    return {
      logo,
      loginParams: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      api.loginIn(this.loginParams).then(res => {
        if (res) {
          // 保存token
          localStorage.setItem('token', res.token)
          // 保存登录用户信息
          localStorage.setItem('userInfo', JSON.stringify({
            type: res.type,
            username: res.username
          }))
          // 跳转到主页
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100%;
    background: #eee;
    .login-form {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 450px;
      background: linear-gradient(red, pink);
      text-align: center;
      border-radius: 10px;
      h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 200px;
        }
      }
      li {
        display: flex;
        padding: 10px 100px;
        align-items: center;
        label {
          flex: 1;
          text-align: left;
        }
        input {
          padding: 5px 0;
          flex: 3;
        }
      }
      button {
        margin-top: 20px;
        padding: 10px 50px;
      }
    }
  }
</style>
