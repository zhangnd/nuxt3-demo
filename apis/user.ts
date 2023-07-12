import http from '@/utils/http'

export function register(body: any) {
  return http.post('/user/register', body)
}

export function login(body: any) {
  return http.post('/user/login', body)
}

export function logout() {
  return http.post('/user/logout')
}

export function getSession() {
  return http.get('/user/getSession')
}

export function getUser(params: any) {
  return http.get('/user/getUser', params)
}