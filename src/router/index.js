/*
 * @Author: mingru 
 * @Date: 2017-08-04 11:25:01 
 * @Last Modified by: mingru
 * @Last Modified time: 2017-08-16 10:27:48
 */
import Vue from 'vue';
import Router from 'vue-router';

import HomeLayout from '@/pages/layouts/home';  // 博客主页面的公共部分
import ManageLayout from '@/pages/layouts/manage';  // 博客后台管理主页面的公共部分
import NotFound404 from '@/pages/404'; // 404页面
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
      redirect: '/manage/home',
      component: ManageLayout,
      children: ManageHome,
    },
    {
      path: '*',
      name: '404',
      component: NotFound404,
    },
  ],
});
