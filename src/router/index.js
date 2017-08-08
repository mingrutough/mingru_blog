/*
 * @Author: mingru 
 * @Date: 2017-08-04 11:25:01 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-08 16:22:58
 */
import Vue from 'vue';
import Router from 'vue-router';

import HomeLayout from '@/pages/layouts/home';  // 博客主页面的公共部分
import ManageLayout from '@/pages/layouts/manage';  // 博客后台管理主页面的公共部分


import Home from '@/router/home'; // 博客展示页面的路由
import ManageHome from '@/router/manage'; // 博客后台管理页面的路由


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/home',
      component: HomeLayout,
      children: Home,
    },
    {
      path: '/manage',
      name: '后台管理',
      component: ManageLayout,
      chidren: ManageHome,
    },
  ],
});
