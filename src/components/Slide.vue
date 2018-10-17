<template>
  <div class="slide" @click="nextStep()">
    <div class="slide-title">
      <h1>{{ title }}</h1>
    </div>
    <transition-group name="slide" class="slide-content" tag="div">
      <template v-for="i in steps">
        <div :key="i" v-show="currentStep >= i">
          <slot :name="`step${i}`"></slot>
        </div>
      </template>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    title: String
  },
  computed: {
    steps () {
      return Object.keys(this.$slots).length
    }
  },
  data () {
    return {
      currentStep: 0
    }
  },
  methods: {
    nextStep () {
      if (this.currentStep === this.steps) {
        this.currentStep = 0
        this.$store.dispatch('slideCompleted')
      } else {
        this.currentStep++
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.slide {
  width: 100%;
  height: 100%;
  padding: $spacer * 2;
  .slide-title {
    margin-bottom: $spacer * 2;
    border-bottom: 5px solid $teal;
  }
}
</style>
