import {
  ElButton,
  ElMessage
} from 'element-plus'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.config.globalProperties.$ELEMENT = {
    size: 'small'
  }
  vueApp.use(ElButton)
  vueApp.use(ElMessage)
})