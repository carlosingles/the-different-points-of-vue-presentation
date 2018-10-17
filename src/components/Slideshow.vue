<template>
  <transition-group name="slide" tag="div" class="slideshow">
    <div v-for="i in slideCount" :key="i" v-show="currentSlide === i" class="slide-wrapper">
      <slot :name="`slide${i}`"></slot>
    </div>
  </transition-group>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Slideshow',
  computed: {
    ...mapGetters([
      'currentSlide',
      'slideCount'
    ])
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.slideshow {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  .slide-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
  }
}
</style>
