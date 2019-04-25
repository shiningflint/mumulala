import VueRouter from 'vue-router'
import About from 'views/About'

const routes = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default routes
