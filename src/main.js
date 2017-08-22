/*
 * @Author: mingru 
 * @Date: 2017-08-04 11:34:01 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-21 17:19:29
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import $ from 'jquery';
import iView from 'iview'; // iView 库
import VueSimplemde from 'vue-simplemde'; // 适合vue 的markdown编辑器

import 'iview/dist/styles/iview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import App from './App';
import router from './router';
import { publicPlugin } from './plugins/index'; // 项目的公用插件，主要为项目组件注入一些公用的方法。


Vue.use(iView);
Vue.use(VueSimplemde);
Vue.use(publicPlugin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
