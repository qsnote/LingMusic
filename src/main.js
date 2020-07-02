import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import './common/stylus/index.styl'

// 动态修改页面title
// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = el.dataset.title
//   }
// })

// eslint-disable-next-line no-unused-vars
import vConsole from 'vconsole'

console.log('test')

// fastclick 解决移动端按钮点击3s延迟问题
fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
