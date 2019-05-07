import Http from '@/utils/http'
import { BASE_URL } from '@/utils/apiconfig'

export const axios = Http.createAxiosInstance({
  baseURL: BASE_URL,
  withCredentials: true
})
