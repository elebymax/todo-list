import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Daily from '../views/Daily'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: 'daily-todos', component: Daily }
      ]
    }
  ]
})
