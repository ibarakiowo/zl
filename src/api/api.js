import { createAxiosInstance, BASE_URL } from '@/utils'

export const axios = createAxiosInstance({
  baseURL: BASE_URL,
  withCredentials: true
})
