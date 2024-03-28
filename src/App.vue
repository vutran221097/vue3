<template>
  <div id="app">
    <Navbar />
    <div class="container mx-auto p-4">
      <router-view /> <!-- This will render the component corresponding to the current route -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar/Navbar.vue';

</script>

<!-- Styles -->
<style>
#app {
  font-family: Arial, sans-serif;
  background-image: url('https://img.freepik.com/premium-photo/close-up-book-shelf-with-many-books-it-generative-ai_771703-49642.jpg');
}

.main-color {
  background-color: #F4F3F2;
}

.btn-color {
  background-color: #B78A27;
}

.text-primary-color {
  color: #B78A27;
}
</style>