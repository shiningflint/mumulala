import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './Routes'

Vue.use(VueRouter)

new Vue({
  router: Routes,
  render: h => h(App),
}).$mount('#app')
