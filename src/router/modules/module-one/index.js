/** @format */
import Main from '@/views/main';
import DefaultPage from '@/views/default';
import Login from '@/views/login';
import resource from './resource';
import functionsTest from './functions';
import bookScale from '@/views/functions/scale/bookScale';

// 放入侧边菜单栏的路由
export const menuRoute = [resource, functionsTest];

/**
 *
 * 路由具备name 供左侧菜单 :key
 * meta  title 供左侧菜单展示
 * meta  hideInMenu 不在左侧菜单展示
 * meta  showAlways 就算只有1个子弹 也展示成下拉列表框
 * meta  noControl 不需要 验证角色的权限 直接保存到路由中
 * meta  icon 设置图标的名称
 * meta activeTagName 个人中心 表示当前页面所属的模块 roleAdmin userAdmin acountAdmin
 * meta headerConfig 供自定义的header组件使用
 */
export const routerMap = [
  {
    path: '/',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true,
      noControl: true
    },
    component: Login
  },
  {
    // 进入后的默认首页
    path: '/index',
    name: 'index',
    meta: {
      title: '监管平台',
      noControl: true,
      hideInMenu: true
    },
    redirect: '/home',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '监管平台',
          noControl: true,
          hideInMenu: true
        },
        component: DefaultPage
      }
    ]
  },
  ...menuRoute,
  {
    path: '/bookScale',
    name: 'bookScale',
    meta: {
      title: '缩放',
      noControl: true,
      hideInMenu: true
    },
    component: bookScale
  }
];
