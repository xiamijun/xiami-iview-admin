<!-- @format -->

<template>
  <div>
    <img src="https://cn.vuejs.org/images/logo.png" alt="" width="100" height="100">
    <Button @click="download">下载</Button>
  </div>
</template>

<script>
import { downloadImg } from '@/utils';
export default {
  name: 'util-test',
  data() {
    return {};
  },
  methods: {
    download() {
      downloadImg('https://cn.vuejs.org/images/logo.png', '图片');
    }
  }
};
</script>

<style scoped>
</style>
