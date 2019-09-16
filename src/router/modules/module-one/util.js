/** @format */

import Main from '@/views/main';

export default {
  path: '/util',
  name: 'util',
  component: Main,
  meta: {
    fullPath: 'util',
    noControl: true,
    showAlways: true,
    icon: 'md-contact',
    title: '工具函数测试'
  },
  children: [
    {
      path: '/util/full-screen',
      name: 'full-screen',
      component: resovle => require(['@/views/util/full-screen'], resovle),
      meta: {
        title: '全屏',
        noControl: true,
        fullPath: '/util/full-screen'
      }
    },
    {
      path: '/util/preview-img',
      name: 'preview-img',
      component: resovle => require(['@/views/util/preview-img'], resovle),
      meta: {
        title: '预览图片',
        noControl: true,
        fullPath: '/util/preview-img'
      }
    },
    {
      path: '/util/bg-attachment',
      name: 'bg-attachment',
      component: resovle => require(['@/views/util/bg-attachment'], resovle),
      meta: {
        title: '背景视差',
        noControl: true,
        fullPath: '/util/bg-attachment'
      }
    },
    {
      path: '/util/drag-list',
      name: 'drag-list',
      component: resovle => require(['@/views/util/drag-list'], resovle),
      meta: {
        title: '拖拽',
        noControl: true,
        fullPath: '/util/drag-list'
      }
    }
  ]
};
