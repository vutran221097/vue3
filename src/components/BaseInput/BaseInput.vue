<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';
import { defineProps } from 'vue';
const props = defineProps<{ name: string, label?: string, placeholder?: string, type: string, rules?: any, required?: boolean }>();
const { name, label, placeholder, type, rules, required = false } = props;
</script>

<template>
  <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ label }} <span v-if="required"
      class="text-red-500">*</span></label>
  <Field :type="type" :id="name" :name="name"
    class="mt-0 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
    :placeholder="placeholder" :rules="rules" />
  <ErrorMessage class="text-red-500 text-sm" :name="name" />
</template>
