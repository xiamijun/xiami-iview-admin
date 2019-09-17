/** @format */

import Main from '@/views/main';

export default {
  path: '/functions',
  name: 'functions',
  component: Main,
  meta: {
    fullPath: 'functions',
    noControl: true,
    showAlways: true,
    icon: 'md-contact',
    title: '各种功能'
  },
  children: [
    {
      path: '/functions/full-screen',
      name: 'full-screen',
      component: resovle => require(['@/views/functions/full-screen'], resovle),
      meta: {
        title: '全屏',
        noControl: true,
        fullPath: '/functions/full-screen'
      }
    },
    {
      path: '/functions/preview-img',
      name: 'preview-img',
      component: resovle => require(['@/views/functions/preview-img'], resovle),
      meta: {
        title: '预览图片',
        noControl: true,
        fullPath: '/functions/preview-img'
      }
    },
    {
      path: '/functions/bg-attachment',
      name: 'bg-attachment',
      component: resovle => require(['@/views/functions/bg-attachment'], resovle),
      meta: {
        title: '背景视差',
        noControl: true,
        fullPath: '/functions/bg-attachment'
      }
    },
    {
      path: '/functions/drag-list',
      name: 'drag-list',
      component: resovle => require(['@/views/functions/drag-list'], resovle),
      meta: {
        title: '拖拽',
        noControl: true,
        fullPath: '/functions/drag-list'
      }
    },
    {
      path: '/functions/scale',
      name: 'scale',
      component: resovle => require(['@/views/functions/scale'], resovle),
      meta: {
        title: '缩放',
        noControl: true,
        fullPath: '/functions/scale'
      }
    }
  ]
};
