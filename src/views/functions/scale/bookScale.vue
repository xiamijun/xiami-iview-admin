<!-- @format -->

<template>
  <div class="ebook-content" id="ebook-content">
    <div class="swiper-slide">
      <img
        src="../../../assets/images/23.jpg"
        alt=""
        onmousedown="return false"
      />
    </div>
  </div>
</template>

<script>
import Hammer from 'hammerjs';

export default {
  name: 'scale',
  data() {
    return {
      maxScale: 2,
      minScale: 1,
      bookScale: 1,
      bookTransform: {
        deltaX: 0,
        deltaY: 0,
        maxTransformX: 0,
        maxTransformY: 0,
        currentTransformX: 0,
        currentTransformY: 0
      },
      modal11: false
    };
  },
  mounted() {
    document.querySelector('#app').style.overflow = 'hidden';
    this.initHammer();
  },

  methods: {
    initHammer() {
      const ebookDom = (this.ebookDom = document.querySelector('#ebook-content'));

      var that = this;

      ebookDom.addEventListener('mousewheel', function(e) {
        let scale = that.bookScale + e.wheelDelta / 1200;
        if (scale < that.minScale) {
          scale = that.minScale;
        }
        if (scale > that.maxScale) {
          scale = that.maxScale;
        }
        that.bookScale = scale;
      });

      const hammer = (this.hammer = new Hammer(ebookDom));
      hammer.get('pinch').set({ enable: true });

      hammer.on('doubletap', function(e) {
        that.bookTransform.deltaX = 0;
        that.bookTransform.deltaY = 0;
        that.bookTransform.currentTransformX = 0;
        that.bookTransform.currentTransformY = 0;
        that.bookScale = that.bookScale > that.minScale ? that.minScale : that.maxScale;
      });

      hammer.on('pinchmove', e => {
        let scale = e.scale * that.bookScale;
        if (scale < this.minScale) {
          scale = this.minScale;
        }
        if (scale > this.maxScale) {
          scale = this.maxScale;
        }
        ebookDom.style.transform = 'scale(' + scale + ') ';
      });

      hammer.on('pinchend', e => {
        that.bookTransform.deltaX = 0;
        that.bookTransform.deltaY = 0;
        that.bookTransform.currentTransformX = 0;
        that.bookTransform.currentTransformY = 0;
        let scale = e.scale * that.bookScale;
        if (scale < this.minScale) {
          scale = this.minScale;
        }
        if (scale > this.maxScale) {
          scale = this.maxScale;
        }
        that.bookScale = scale;
      });

      hammer.on('panmove', function(e) {
        if (that.bookScale === 1) return;
        let deltaX = that.bookTransform.deltaX;
        let deltaY = that.bookTransform.deltaY;
        let currentTransformX = deltaX + e.deltaX;
        let currentTransformY = deltaY + e.deltaY;
        const maxTransformX = that.bookTransform.maxTransformX;
        const maxTransformY = that.bookTransform.maxTransformY;

        if (Math.abs(currentTransformX) > maxTransformX) {
          currentTransformX = currentTransformX > 0 ? maxTransformX : -maxTransformX;
        }
        if (Math.abs(currentTransformY) > maxTransformY) {
          currentTransformY = currentTransformY > 0 ? maxTransformY : -maxTransformY;
        }
        ebookDom.style.transitionDuration = '0ms';
        ebookDom.style.transform =
          'translate(' + currentTransformX + 'px,' + currentTransformY + 'px) scale(' + that.bookScale + ')';
      });

      hammer.on('panend', function(e) {
        if (that.bookScale === 1) return;
        that.bookTransform.deltaX = that.bookTransform.deltaX + e.deltaX;
        that.bookTransform.deltaY = that.bookTransform.deltaY + e.deltaY;
        ebookDom.style.transitionDuration = '300ms';
      });
    }
  },
  watch: {
    bookScale() {
      const nWidth = this.ebookDom.offsetWidth;
      const nHeight = this.ebookDom.offsetHeight;

      this.bookTransform.maxTransformX =
        this.bookScale > this.minScale ? (nWidth * (this.bookScale - this.minScale)) / 2 : 0;
      this.bookTransform.maxTransformY =
        this.bookScale > this.minScale ? (nHeight * (this.bookScale - this.minScale)) / 2 : 0;
      this.ebookDom.style.transitionDuration = '300ms';
      this.ebookDom.style.transform =
        'translate(' +
        this.bookTransform.currentTransformX +
        'px,' +
        this.bookTransform.currentTransformY +
        'px) scale(' +
        this.bookScale +
        ')';
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
