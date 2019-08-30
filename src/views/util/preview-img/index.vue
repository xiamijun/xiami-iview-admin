<!-- @format -->

<template>
  <div>
    <input type="file"><br>
    <img src="" height="200">
  </div>
</template>

<script>
export default {
  name: 'preview-img',
  data() {
    return {};
  },
  mounted() {
    let fileInput = document.querySelector('input[type=file]');
    let previewImg = document.getElementsByTagName('img')[0];
    fileInput.addEventListener(
      'change',
      function() {
        let file = this.files[0];
        let reader = new FileReader();
        reader.addEventListener(
          'load',
          function() {
            previewImg.src = reader.result;
          },
          false
        );
        reader.readAsDataURL(file);
      },
      false
    );
  }
};
</script>

<style scoped>
</style>
