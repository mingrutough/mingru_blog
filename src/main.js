/*
 * @Author: mingru 
 * @Date: 2017-08-04 11:34:01 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-04 11:53:51
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});