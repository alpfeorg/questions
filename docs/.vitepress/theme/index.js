import DefaultTheme from 'vitepress/theme'
import RunCode from '../components/RunCode.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RunCode', RunCode)
  }
} 