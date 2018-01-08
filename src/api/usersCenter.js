/*
 * @Author: lucm
 * @Date: 2017-11-02 17:17:58
 * @Last Modified by: lucm
 * @Last Modified time: 2018-01-08 15:31:12
 */

import fetch from 'fetch'
/* *******************设置API请求地址***************************/
let interfaceEnv = {
  // test 测试地址
  'test': '',
  // test 线上地址
  'prd': ''
}
let base = interfaceEnv.test
/* *******************设置API请求地址***************************/
// 登录
export const userlogin = (params, callball) => {
  fetch.httpGetRequest(`${base}/manager/login?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
