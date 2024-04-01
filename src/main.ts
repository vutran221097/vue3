import { createApp, App as AppType } from "vue";
import { Router } from "vue-router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import App from "./App.vue";
import router from "./router/index.ts";
import { firebaseConfig } from "./firebase/config.ts";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app: AppType<Element> = createApp(App);
const routerInstance: Router = router;

app.use(routerInstance).use(pinia).mount("#app");
