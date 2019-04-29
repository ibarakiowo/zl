import { axios } from './api'
const url = '/login'

const testApi = params => {
  return axios.post(`${url}/loginIn`, params)
}

const testApi2 = params => {
  return axios.post(`user/list`, params)
}

export default {
  testApi,
  testApi2
}
