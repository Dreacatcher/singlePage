/*
 * @Author: lucm
 * @Date: 2017-11-29 10:03:59
 * @Last Modified by: lucm
 * @Last Modified time: 2017-11-29 11:40:58
 */
'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
  // horn
  patientsManagementStore: srcDir + '/store/modules/patientsManagement'
}

