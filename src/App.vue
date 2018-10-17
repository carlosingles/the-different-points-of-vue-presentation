<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';
@import "~bootstrap/scss/bootstrap-grid";
@import "~bootstrap/scss/bootstrap-reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/utilities";
html, body {
  height: 100%;
  user-select: none;
  background: $dark-teal;
}
#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// slide animation
.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
