<!-- @format -->

<template>
  <div>
    <Button @click="go">打开</Button>
  </div>  
</template>

<script>
export default {
  name: 'scale',
  data() {
    return {
      modal11: false
    };
  },

  methods: {
    go() {
      this.$router.push({
        name: 'bookScale'
      });
    }
  }
};
</script>

<style scoped>
.ebook-content {
  height: 100%;
  width: 100%;
}
.swiper-slide {
  height: 100%;
  text-align: center;
}
.swiper-slide img {
  height: 100%;
}
</style>
