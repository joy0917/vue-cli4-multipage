import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/app-main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/a')
      },
      {
        path: '/home/2',
        name: 'home2',
        component: () => import('../views/b')
      }
    ]
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/components/app-error/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
