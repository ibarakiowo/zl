import { axios } from './api'
const url = '/login'

const loginIn = params => {
  return axios.post(`${url}/loginIn`, params)
}

export default {
  loginIn
}
