# Vue 3

reading book

## Props

```html
<script setup lang="ts" props="props">
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

## Script vs script setup

- Template
`<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="addItem">Add Item</button>
  </div>
</template>`

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

## Router

```jsx
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    name: "HomePage",
    component: () => import("../views/HomePage.vue"),
  },
];
const router = createRouter({ history: createWebHistory(), routes });
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

    // how access state through navigate
    console.log(window.history.state);
  };
</script>

<template>
  <router-link to="/home">Home</router-link>
  <router-link to="{ name: 'HomePage' }">Home</router-link>
</template>
```

## Document

- Basic Vue3: https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf
- Firebase Auth: https://firebase.google.com/docs/auth/web/start?hl=vi

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) -
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
