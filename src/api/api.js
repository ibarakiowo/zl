import Http from '@/utils/http'
import { BASE_URL } from '@/utils/apiConfig'

export const axios = Http.createAxiosInstance({
  baseURL: BASE_URL,
  withCredentials: true
})
