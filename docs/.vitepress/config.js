import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的文档',
  description: '使用 VitePress 创建的文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'JavaScript', link: '/guide/JavaScript 有哪些数据类型？哪些是基本类型？哪些是引用类型' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'JavaScript 有哪些数据类型？哪些是基本类型？哪些是引用类型', link: '/guide/JavaScript 有哪些数据类型？哪些是基本类型？哪些是引用类型' },
          { text: '箭头函数和普通函数的区别有哪些', link: '/guide/箭头函数和普通函数的区别有哪些' }
        ]
      }
    ]
  }
}) 