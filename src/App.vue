<template>
  <HelloWorld msg="Welcome to Your Vue.js App, this is test number 1"/>
  <img alt="Vue logo" src="./assets/logo.png">
  <UserLocation />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserLocation from './components/Geolocation.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UserLocation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
