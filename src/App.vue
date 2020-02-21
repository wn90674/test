<template>
  <div id="app">
    <home-page />
    <loading-percent />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue'
import LoadingPercent from '@/components/LoadingPercent'

export default {
  name: 'App',
  components: {
    HomePage,
    LoadingPercent,
  }
}
</script>

<style lang="scss">
@import 'assets/css/common.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
