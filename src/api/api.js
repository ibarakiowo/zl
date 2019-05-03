import Utils from '@/utils'

const axios = Utils.Http.createAxiosInstance({
  baseURL: `${Utils.ApiConfig.BASE_URL}${Utils.ApiConfig.PRO_URL}`,
  withCredentials: true
})

export { axios }
