import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from 'src/routes'
import 'stylesheets/global.scss'

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
