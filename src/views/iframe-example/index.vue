<template>
  <div>
    <iframe :src="iframeSrc" frameborder="0" width="660" height="600" ref="iframe"></iframe>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        iframeSrc: '/assets/previewFile.html'
      }
    },
  }
</script>

<style scoped>

  
</style>
