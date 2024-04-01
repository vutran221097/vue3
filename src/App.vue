<template>
  <div id="app font-sans">
    <Navbar />
    <router-view /> <!-- This will render the component corresponding to the current route -->
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar/Navbar.vue';
</script>
