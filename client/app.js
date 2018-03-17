import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

sync(store, router)

Vue.use(MuseUI)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
