import viteCompression from 'vite-plugin-compression'

const isDev = process.env.NODE_ENV === 'development'

const proxy = 'http://localhost:8080/api'

export default defineNuxtConfig({
  ssr: true,
  telemetry: false,
  typescript: {
    strict: true,
    typeCheck: true
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    https: false
  },
  runtimeConfig: {
    public: {
      proxy
    }
  },
  nitro: {
    devProxy: {
      '/api': {
        target: proxy,
        changeOrigin: true
      }
    }
  },
  devtools: {
    enabled: false
  },
  app: {
    head: {
      title: '',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'IE=edge,chrome=1' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'keywords', content: '' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'referrer', content: isDev ? 'same-origin' : 'strict-origin-when-cross-origin' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [

      ]
    }
  },
  css: [
    '@/assets/css/global.scss',
    '@/assets/css/iconfont.scss'
  ],
  components: [
    { path: '@/components' }
  ],
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@element-plus/nuxt'
  ],
  vite: {
    build: {
      assetsInlineLimit: 10 * 1024
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/mixins.scss" as *;'
        }
      }
    },
    plugins: [
      viteCompression()
    ]
  }
})
