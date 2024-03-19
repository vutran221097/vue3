<template>
  <div id="app">
    <router-view /> <!-- This will render the component corresponding to the current route -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>