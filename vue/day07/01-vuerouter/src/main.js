import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 所有的组件都继承自Vue原型。所有Vue原型添加内容，各个组件都有这些内容
Vue.prototype.test=function () {
  console.log('test.哈哈');
};
Vue.prototype.name='mofashi';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// console.log('main.js router');
// console.log(router);
