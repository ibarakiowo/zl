import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'
import User from '@/pages/user/user'
import UserXX from '@/pages/user/user.xx'
import Restaurant from '@/pages/restaurant/restaurant'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'user',
          name: 'user',
          component: User,
          meta: {
            title: '用户管理'
          }
        },
        {
          path: 'userxx',
          name: 'userxx',
          component: UserXX,
          meta: {
            title: '用户新增'
          }
        },
        {
          path: 'userxx/:id',
          name: 'userxx',
          component: UserXX,
          meta: {
            title: '用户详情'
          }
        },
        {
          path: 'restaurant',
          name: 'restaurant',
          component: Restaurant,
          meta: {
            title: '饭店管理'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 判断是否登录
  if (to.name === 'login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
  // 设置title标题
  document.title = to.meta.title
})

export default router
