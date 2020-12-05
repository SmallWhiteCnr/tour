import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// css
import 'css/reset.css'
import 'css/iconfont.css'

//js
import FastClick from 'fastclick'
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
