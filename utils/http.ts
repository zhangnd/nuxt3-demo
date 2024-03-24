const fetch = async (url: string, options?: any): Promise<any> => {
  const { public: { proxy } } = useRuntimeConfig()
  const { host } = useRequestURL()
  let baseURL
  if (process.server) {
    if (process.env.NODE_ENV === 'development') {
      baseURL = proxy
    } else {
      baseURL = `https://${host}/api`
    }
  } else {
    baseURL = '/api'
  }
  options.baseURL = baseURL
  options.retry = 0
  const { data, error } = await useAsyncData(url, () => useRequestFetch()(url, options))
  const res: any = data.value
  const err: any = error.value
  if (err) {
    let { message } = err
    if (process.server) {
      return Promise.reject(message)
    } else {
      if (message?.includes('message timeout')) {
        message = '请求超时'
      } else {
        const { statusCode = 500 } = err
        switch (statusCode) {
        case 404:
          message = '404 Not Found'
          break
        case 405:
          message = '405 Method Not Allowed'
          break
        case 500:
          message = '500 Internal Server Error'
          break
        case 503:
          message = '503 Service Unavailable'
          break
        }
      }
      ElMessage.closeAll()
      ElMessage({
        message,
        type: 'error',
        duration: 2000
      })
      return Promise.reject(message)
    }
  } else {
    return Promise.resolve(res)
  }
}

export default new class Http {
  get(url: string, params?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'GET', params, headers })
  }

  post(url: string, body?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'POST', body, headers })
  }

  put(url: string, body?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'PUT', body, headers })
  }

  delete(url: string, body?: any, headers?: any): Promise<any> {
    return fetch(url, { method: 'DELETE', body, headers })
  }
}()