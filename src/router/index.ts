import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const router: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]



