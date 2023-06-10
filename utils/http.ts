import { ElMessage } from 'element-plus'

const fetch = (url: string, options?: any): Promise<any> => {
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
  return new Promise<any>((resolve, reject) => {
    useAsyncData(url, () =>
      useRequestFetch()(url, options)
        .then((res: any) => {
          resolve(res)
        })
        .catch(err => {
          if (process.server) {
            reject(err)
          } else {
            const { statusCode = 500, statusMessage } = err
            let message
            switch (statusCode) {
            case 405:
              message = '405 Method Not Allowed'
              break
            case 500:
              message = '500 Internal Server Error'
              break
            case 503:
              message = '503 Service Unavailable'
              break
            default:
              message = `${statusCode} ${statusMessage}`
            }
            ElMessage.closeAll()
            ElMessage({
              message,
              type: 'error',
              duration: 2000
            })
            reject(message)
          }
        })
    )
  })
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