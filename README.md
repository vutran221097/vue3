# Vue 3

Reading Book App

## Require

- Vite requires Node.js version 18+. 20+.

## Create project

- yarn create vite my-vue-app --template vue-ts

## Install package

- vue-router
- yup, vee-validate (optional)
- pinia, pinia-plugin-persistedstate (optional)
- axios, tailwind, firebase, vue3-toastify,...

## Start project

- npm run dev / yarn dev

## Vue file structure

```html
<template> Your html ui</template>

<script lang="ts">
  Your logic code
</script>

<style scoped></style>
```

## Script vs script setup

- Script

```html
<script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" },
        ],
      };
    },
    methods: {
      addItem() {
        const newItem = {
          id: this.items.length + 1,
          name: `Item ${this.items.length + 1}`,
        };
        this.items.push(newItem);
      },
    },
  };
</script>
```

- Script setup

```html
<script setup lang="ts">
  import { ref } from "vue";

  const items = ref([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const addItem = () => {
    const newItem = {
      id: items.value.length + 1,
      name: `Item ${items.value.length + 1}`,
    };
    items.value.push(newItem);
  };
</script>
```

## State

```jsx
import { ref, reactive } from "vue";

const numberState = ref(0);
const userState = reactive({
  id:'190ff08c-2504-4ce6-8667-b760423bec97'
  name: "user",
  phone: "19001009",
  email: "use@gmail.com",
});
```

## Template syntax and Binding data

```html
<div :id="userState.id">{{userState.name}}</div>
```

## Conditional rendering

```html
<div v-if="date == today">...</div>
<div v-else-if="!done">...</div>
<div v-else>...</div>
```

## Event

```html
<div @click="count">Increase</div>
```

## List rendering

```html
<li v-for="(item, index) in items">{{ index }} : {{ item }}</li>
```

## Props

```html
<script setup lang="ts">
  import { defineProps, toRefs } from "vue";

  const props = defineProps<{
    title?: string;
    type: "button" | "submit" | "reset";
    isLoading?: boolean;
    className?: string;
  }>();

  const {
    type = "button",
    title = "submit",
    className = "",
    isLoading = false,
  } = toRefs(props);
</script>
```

## Router

```jsx
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import("../views/ProfilePage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({ history: createWebHistory(), routes });

// protect router
// can add more condition in meta to check
router.beforeEach((to, _, next) => {
  const auth = useAuthStore();
  const { login } = auth;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (login) {
      next();
    } else {
      next({ name: "LoginPage" });
    }
  } else {
    next();
  }
});
export default router;
```

## Navigate

```html
<script setup lang="ts">
  import { useRouter } from "vue-router";
  const router = useRouter();

  const navigate = () => {
    // literal string path
    router.push("/users/eduardo");

    // object with path
    router.push({ path: "/users/eduardo" });

    // named route with params to let the router build the url
    // path: '/user/:username',
    router.push({ name: "user", params: { username: "eduardo" } });

    // with query, resulting in /register?plan=private
    router.push({ path: "/register", query: { plan: "private" } });

    // with hash, resulting in /about#team
    router.push({ path: "/about", hash: "#team" });

    // with state through navigate
    router.push({
      path: "/your-route",
      state: { customData: "your custom data" }, // Custom state object
    });

    // how to access state through navigate
    console.log(window.history.state.customData);
  };
</script>

<template>
  <router-link to="/home">Home</router-link>
</template>
```

## Demo Project:

- Github: https://github.com/vutran221097/vue3

## Document

- Basic Vue3: https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) -
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
