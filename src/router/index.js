import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cards from '../views/Cards.vue'
import Reactividad from '../views/Reactividad.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/reactividad',
    name: 'Reactividad',
    component: Reactividad
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
