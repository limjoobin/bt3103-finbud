import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'

import VueRouter from 'vue-router'
import firebase from 'firebase';

Vue.use(VueRouter)
const router = new VueRouter({
  routes:Routes,
  mode:'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/');
  else if (!requiresAuth && currentUser) next ('home','community','budget_planning','investment_growth','savings_withdrawal','financial_pathway','dashboard');
  else next();
});

export default router;

Vue.config.productionTip = false

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})
/*
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
*/