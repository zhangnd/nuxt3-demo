import viteCompression from 'vite-plugin-compression'

const proxy = 'http://localhost:8088/api'

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
  app: {
    cdnURL: '',
    head: {
      title: '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      script: [

      ]
    }
  },
  css: [
    '@/assets/css/global.scss',
    '@/assets/css/iconfont.scss',
    '@/assets/css/element-plus.scss'
  ],
  components: [
    { path: '@/components' }
  ],
  modules: [
    '@vueuse/nuxt'
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