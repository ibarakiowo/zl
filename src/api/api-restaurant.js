import { axios } from './api'
const url = '/restaurant/api'

// 饭店列表
const list = params => {
  return axios.post(`${url}/list`, params)
}

// 激活饭店
const active = id => {
  return axios.post(`${url}/active?restaurantId=${id}`)
}

// 冻结饭店
const freeze = id => {
  return axios.post(`${url}/freeze?restaurantId=${id}`)
}

export default {
  list,
  active,
  freeze
}
