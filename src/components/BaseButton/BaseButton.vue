<script setup lang="ts" props="props">
import { defineProps, toRefs } from 'vue';

const props = defineProps<{
    title?: string;
    type: 'button' | 'submit' | 'reset';
    loading?: boolean;
    className?: string;
}>();

const { type = 'button', title = 'submit', className = '', loading = false } = toRefs(props)

</script>

<template>
    <button :type="type" :class="`${className} ${loading ? 'opacity-50' : ''}`" :disabled="loading">
        <div class="flex justify-center items-center">
            {{ title }}
        </div>
    </button>
</template>
