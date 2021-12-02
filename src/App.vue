<template>
  <router-view />
  <!-- <PersonalInformation /> -->
  <!-- <Navigation /> -->
</template>

<script setup>
import Navigation from './components/Navigation.vue';
import PersonalInformation from './components/PersonalInformation.vue';
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
