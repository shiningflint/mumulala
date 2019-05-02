import VueRouter from 'vue-router'
import {
  asyncComponentLoader,
} from './helpers'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: asyncComponentLoader('Recipes'),
    },
    {
      path: '/recipes/:recipeID',
      name: 'recipeShow',
      component: asyncComponentLoader('Recipes', 'Show'),
    },
    {
      path: '/about',
      name: 'about',
      component: asyncComponentLoader('About'),
    },
  ],
})

export default router
