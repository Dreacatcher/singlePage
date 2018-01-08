/*
 * @Author: lucm
 * @Date: 2017-06-05 17:21:49
 * @Last Modified by: lucm
 * @Last Modified time: 2018-01-08 11:28:39
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Element)
Vue.use(MintUI)
router.beforeEach((to, from, next) => {
  if (to.path === '/Login') {
    sessionStorage.removeItem('access-user')
  }
  let usernkname = JSON.parse(sessionStorage.getItem('access-user'))
  if (!usernkname && to.path !== '/Login') {
    next({ path: '/Login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
