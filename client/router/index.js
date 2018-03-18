import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Daily from '../views/Daily'
import Todos from '../views/Todos'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'daily-todos',
          component: Daily,
          props: {
            mode: 'daily-mode'
          }
        },
        {
          path: 'done-todos',
          component: Todos,
          props: {
            mode: 'done-mode'
          }
        },
        {
          path: 'undone-todos',
          component: Todos,
          props: {
            mode: 'undone-mode'
          }
        },
      ]
    }
  ]
})
