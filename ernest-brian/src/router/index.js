import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Gender',
      name: 'Gender',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Borough',
      name: 'Borough',
      component: () => import('../views/BiteBorough.vue')
    },
    {
      path: '/Neuter',
      name: 'Neuter',
      component: () => import('../views/BiteNeuter.vue')
    }
  ]
})

export default router
