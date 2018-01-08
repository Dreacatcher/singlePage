/*
 * @Author: lucm
 * @Date: 2017-11-29 14:19:35
 * @Last Modified by: lucm
 * @Last Modified time: 2018-01-08 10:01:18
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from './_include/home'
import usersCenter from './_include/usersCenter'
import Index from 'index'

Vue.use(Router)
let newArr = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]
let newRouter = [
  ...newArr,
  ...home,
  ...usersCenter
]
export default new Router({
  routes: newRouter
})
