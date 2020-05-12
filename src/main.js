import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'
import './common/stylus/index.styl'

// 动态修改页面title
// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = el.dataset.title
//   }
// })

// fastclick 解决移动端按钮点击3s延迟问题
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
