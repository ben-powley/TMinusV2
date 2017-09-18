import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Launch from '@/pages/Launch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/launch/:id',
      name: 'Launch',
      component: Launch
    }
  ]
})
