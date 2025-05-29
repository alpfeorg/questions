import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'
import type { Component } from 'vue'

// 自动导入 examples 目录下的所有组件
const exampleModules = import.meta.glob<{ default: Component }>('../examples/**/index.vue', { eager: true })

// 生成路由配置
const exampleRoutes: RouteRecordRaw[] = Object.entries(exampleModules).map(([path, component]) => {
  // 从路径中提取示例名称
  const name = path.split('/').slice(-2)[0]
  return {
    path: `/${name}`,
    name: `example-${name}`,
    component: component.default,
    meta: {
      title: name.charAt(0).toUpperCase() + name.slice(1) // 首字母大写
    }
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // 添加示例路由
    ...exampleRoutes
  ]
})

export default router
