// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

require('bootstrap/dist/css/bootstrap.min.css')
require('simple-line-icons/css/simple-line-icons.css')
require('font-awesome/css/font-awesome.min.css')
require('./assets/stylish-portfolio.min.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
