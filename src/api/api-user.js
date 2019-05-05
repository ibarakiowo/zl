import { axios } from './api'
const url = '/api/user'

// 用户列表
const list = params => {
  return axios.post(`${url}/list`, params)
}

// 激活用户
const active = id => {
  return axios.post(`${url}/active?userId=${id}`)
}

// 冻结用户
const freeze = id => {
  return axios.post(`${url}/freeze?userId=${id}`)
}

export default {
  list,
  active,
  freeze
}
