<template>
  <div id="app">
    <nav class="main-color border-gray-200 ">
      <div class="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/src/assets/logo.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap ">Book</span>
        </a>
        <button @click="toggleDropdown" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div :class="{ 'hidden': !dropdownOpen, 'block top-14 left-0': dropdownOpen }"
          class="w-full absolute md:static md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg main-color md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="/login"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Login</a>
            </li>
            <li>
              <a href="/register"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Sign
                Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mx-auto p-4">
      <router-view /> <!-- This will render the component corresponding to the current route -->
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      dropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  },
  mounted() {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (!mediaQuery.matches) {
      this.dropdownOpen = false;
    }
  }
};
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
</style>