import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/app-main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about',
    component: Main,
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/c')
      },
      {
        path: '/about/2',
        name: 'about2',
        component: () => import('../views/d')
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
