import { axios } from './api'
const url = '/user'

const list = params => {
  return axios.post(`${url}/list`, params)
}

export default {
  list
}
