<!-- @format -->
<template>
  <div :class="[isDashBoardFlag? greyClass:blueClass,footerClass]">Copyright©2015 iFLYTEK. All rights reserved. 科大讯飞 版权所有</div>
</template>

<script>
export default {
  name: 'MyFooter',
  data() {
    return {
      isDashBoardFlag: true,
      footerClass: 'footer',
      blueClass: 'blue',
      greyClass: 'grey'
    };
  },
  watch: {
    $route: {
      handler: function() {
        if (this.$route.name === 'dashboard') {
          this.isDashBoardFlag = true;
        } else {
          this.isDashBoardFlag = false;
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  font: normal 13px '微软雅黑';
  bottom: 0;
  width: 100%;
  line-height: 30px;
  text-align: center;
  color: #fff;
  &.grey {
    background-color: #404145;
  }
  &.blue {
    color: white;
    background: #62c0ff;
  }
}
</style>
