/*
 * @Author: lucm
 * @Date: 2017-11-29 14:19:35
 * @Last Modified by: lucm
 * @Last Modified time: 2017-11-29 14:22:49
 */
import Vue from 'vue'
import Router from 'vue-router'
import Holle from 'holleVue'
import PatientsManagement from './_include/patientsManagement'

Vue.use(Router)
let newArr = [
  {
    path: '/',
    name: 'Holle',
    component: Holle
  }
]
let newRouter = [
  ...newArr,
  ...PatientsManagement
]
export default new Router({
  routes: newRouter
})
