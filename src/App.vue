<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // DataV
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  background: #060612;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #BCBCBF;
}
</style>
