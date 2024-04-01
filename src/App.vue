<template>
  <div id="app font-sans">
    <Navbar />
    <LoadingWrapper>
      <router-view /> <!-- This will render the component corresponding to the current route -->
    </LoadingWrapper>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar/Navbar.vue';
import LoadingWrapper from './components/LoadingWrapper/LoadingWrapper.vue';
import "./style.css";
import "vue3-toastify/dist/index.css";
</script>
