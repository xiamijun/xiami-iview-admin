<!-- @format -->

<template>
  <div>
    <Card class="card">
      <img src="https://cn.vuejs.org/images/logo.png" alt="" width="100" height="100">
      <Button @click="download">下载</Button>
    </Card>
    <Card class="card">
      <Button @click="openFull">开启全屏</Button>
      <Button @click="closeFull">关闭全屏</Button>
      <Input type="textarea" id="textarea"></Input>
      <Button @click="openFullText">开启全屏编辑框</Button>
    </Card>
    
  </div>
</template>

<script>
import { downloadImg, launchFullScreen, exitFullScreen } from '@/utils';
export default {
  name: 'fullScreen',
  data() {
    return {};
  },
  methods: {
    download() {
      downloadImg('https://cn.vuejs.org/images/logo.png', '图片');
    },
    openFull() {
      launchFullScreen();
    },
    openFullText() {
      launchFullScreen(document.querySelector('#textarea'));
    },
    closeFull() {
      exitFullScreen();
    }
  }
};
</script>

<style scoped>
.card {
  margin: 10px;
}
</style>
