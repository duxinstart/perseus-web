import { createI18n } from 'vue-i18n'
// 导入语言包
import zhCN from './zh-CN'
import enUS from './en-US'

// 创建 i18n 实例
const i18n = createI18n({
  // 使用 Composition API 模式
  legacy: false,
  // 默认语言，优先使用本地存储的语言设置
  locale: localStorage.getItem('language') || 'zh-CN',
  // 回退语言
  fallbackLocale: 'zh-CN',
  // 语言包
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n 