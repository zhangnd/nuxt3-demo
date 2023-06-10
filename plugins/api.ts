import * as user from '@/apis/user'

export default defineNuxtPlugin(nuxtApp => {
  function fn(...args: any[]): Promise<any> {
    return new Promise((resolve, reject) => {})
  }
  const api: Record<string, typeof fn> = {}
  const modules = [user]
  modules.forEach((module: any) => {
    Object.keys(module).forEach(key => {
      api[key] = module[key]
    })
  })
  return {
    provide: {
      api
    }
  }
})