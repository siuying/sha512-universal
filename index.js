const js = require('./sha512.js')

var Proto = js

module.exports = function () {
  return new Proto()
}

module.exports.ready = function (cb) {
}

module.exports.WASM_SUPPORTED = false
module.exports.WASM_LOADED = false