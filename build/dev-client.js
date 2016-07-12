/* eslint-disable */
require('eventsource-polyfill')

var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true&path=http://0.0.0.0:8080/__webpack_hmr')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
