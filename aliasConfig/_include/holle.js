/*
 * @Author: lucm
 * @Date: 2017-11-29 11:11:18
 * @Last Modified by: lucm
 * @Last Modified time: 2017-11-29 11:40:58
 */

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
  // horn
  holleStore: srcDir + '/store/modules/holle',
  holleVue: srcDir + '/components/holleWorld/holle'
}

