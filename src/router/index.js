import Vue from 'vue'
import Router from 'vue-router'

import Holle from 'holleVue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Holle',
      component: Holle
    }
  ]
})
