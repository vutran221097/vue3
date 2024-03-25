# Vue 3

reading book

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

`<script>
import { ref } from 'vue';

export default {
data() {
return {
items: [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' }
]
};
},
methods: {
addItem() {
const newItem = { id: this.items.length + 1, name: `Item ${this.items.length + 1}` };
this.items.push(newItem);
}
}
};
</script>`

- Script setup

`<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' }
]);

const addItem = () => {
const newItem = { id: items.value.length + 1, name: `Item ${items.value.length + 1}` };
items.value.push(newItem);
};
</script>`

## Document

- https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) -
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# vuejs
