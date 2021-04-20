import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Routes from './routes.js'
import createPersistedState from "vuex-persistedstate";

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

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    logged_in : false
  }, 
  mutations:{
    login(state) {
      state.logged_in=true
    }, 
    logout(state) {
      state.logged_in=false
    }
  },
  plugins:[createPersistedState()]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const flag = to.matched.some(record => record.meta.flag);

  
  if (requiresAuth && !currentUser) {
    if (requiresAuth) {
      alert('Please login to use this feature.')
    }
    next('/');
  }
  else if (!requiresAuth && currentUser && !flag) next ('/home');
  else next();
});

export default router;

Vue.config.productionTip = false

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
})
