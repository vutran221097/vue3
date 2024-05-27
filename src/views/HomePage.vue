<script setup lang="ts">
import { getAllDocuments } from "@/services/BaseService";
import { DATA_BASE } from "@/services/constant";
import { ErrorMessage } from "@/utils/utils";
import { onMounted } from "vue";

onMounted(() => {
  getData();
});

const getData = async () => {
  try {
    const res = await getAllDocuments(DATA_BASE.BOOKS);
    console.log(res);
  } catch (e) {
    ErrorMessage(e);
  }
};
</script>

<template>
  <div class="bg-banner bg-cover bg-no-repeat w-screen h-72 bg-center"></div>
  <h1 class="text-3xl font-bold">Home Page</h1>
</template>
