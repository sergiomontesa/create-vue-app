import { createRouter, createWebHistory } from 'vue-router'
import type { Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
