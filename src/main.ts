import { createApp, App as AppType } from "vue";
import { Router } from "vue-router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { initializeApp } from "firebase/app";

import App from "./App.vue";
import router from "./router/index.ts";
import "./style.css";

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

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app: AppType<Element> = createApp(App);
const routerInstance: Router = router;

app.use(routerInstance);
app.use(pinia);
app.mount("#app");
