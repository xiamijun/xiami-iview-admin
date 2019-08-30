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
      path: '/util/util-test',
      name: 'util-test',
      component: resovle => require(['@/views/util/util-test'], resovle),
      meta: {
        title: '测试',
        noControl: true,
        fullPath: '/util/util-test'
      }
    }
  ]
};
