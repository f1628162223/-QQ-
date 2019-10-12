// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/style.css"

import "./assets/font-awesome/css/font-awesome.min.css"




Vue.use(ElementUI);



Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
 
  components: { App },
  template: '<App/>'
})
