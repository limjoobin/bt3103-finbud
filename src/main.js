import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
const myRouter = new VueRouter({
  routes:Routes,
  mode:'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: myRouter,
}).$mount('#app')
