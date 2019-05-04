import axios from 'axios'
import router from '@/router'

// 创建axios实例
const createAxiosInstance = option => {
  const instance = axios.create(option)
  // 请求拦截器
  instance.interceptors.request.use(config => {
    // 设置token
    if (localStorage.getItem('token')) config.headers['token'] = localStorage.getItem('token')
    // console.log('http -> request: config', config)
    return config
  }, error => {
    // console.log('http -> request: error', error)
    return Promise.reject(error)
  })
  // 响应拦截器
  instance.interceptors.response.use(response => {
    // console.log('http -> response: response', response)
    if (response.data.head.errCode === 0) {
      return response.data.data
    } else {
      alert(response.data.head.errMsg)
      return null
    }
  }, error => {
    // console.log('http -> response: error', error)
    if (String(error) === 'Error: Request failed with status code 401') {
      alert('您的登录时间过长或长时间没有操作，请重新登录！')
      localStorage.clear()
      router.push('/login')
    }
    return Promise.reject(error)
  })
  return instance
}

// 取消请求
const cancelToken = axios.CancelToken

export default {
  createAxiosInstance,
  cancelToken
}
