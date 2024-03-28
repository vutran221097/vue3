import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyI3JtfYCzNufJ-TwRHD2CAhGSRStCzz4",
  authDomain: "book-203e4.firebaseapp.com",
  projectId: "book-203e4",
  storageBucket: "book-203e4.appspot.com",
  messagingSenderId: "913383815703",
  appId: "1:913383815703:web:c7b842647ec0641454ba52",
};

// Initialize Firebase
initializeApp(firebaseConfig);

import App from "./App.vue";
import router from "./router/index.ts";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
