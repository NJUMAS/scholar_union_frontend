// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import qs from 'qs'

Vue.use(iView);
Vue.use(VueRouter);

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: {App},
  template: '<App/>',
  render: h => h(App)
});
