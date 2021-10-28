<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('GET_CARDS_LIST');
  },
};
</script>

<style lang="scss" scoped>
@import './assets/colors';

 #app {
   background-color: $appBackground;
 }
</style>
