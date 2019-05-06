import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.scss'
import axios from 'axios'

import query from '@/components/common/query'
Vue.component('zl-query', query)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
