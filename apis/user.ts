import http from '@/utils/http'

export function login(body: any) {
  return http.post('/user/login', body)
}