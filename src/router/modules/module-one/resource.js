/** @format */

import Main from '@/views/main';

export default {
  path: '/resource',
  name: 'resource',
  component: Main,
  meta: {
    fullPath: 'resource',
    noControl: true,
    showAlways: true,
    icon: 'md-contact',
    title: '我的资源'
  },
  children: [
    {
      path: '/resource/resourceList',
      name: 'resourceList',
      component: resovle => require(['@/views/resource/resource-list'], resovle),
      meta: {
        title: '资源列表',
        noControl: true,
        fullPath: '/resource/resourceList'
      }
    }
  ]
};
