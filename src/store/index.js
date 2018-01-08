/*
 * @Author: lucm
 * @Date: 2017-06-08 11:06:27
 * @Last Modified by: lucm
 * @Last Modified time: 2018-01-08 09:53:25
 */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import usersCenter from './modules/usersCenter'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    usersCenter
  }
})
