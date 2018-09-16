import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import MSAuth from './views/MSAuth.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/msauth',
      name: 'msauth',
      component: MSAuth,
    }
  ]
})
