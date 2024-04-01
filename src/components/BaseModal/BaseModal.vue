<template>
    <div v-show="open" :class="`fixed inset-0 z-10 overflow-y-auto ${className}`">
        <div class="flex items-center justify-center min-h-screen">
            <!-- Overlay -->
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="handleClose"></div>

            <!-- Modal -->
            <div class="bg-white rounded-lg p-8 max-w-md mx-auto z-20">
                <!-- Modal content -->
                <div class="modal-content">
                    <slot></slot>
                </div>

                <!-- Modal footer with buttons -->
                <div class="mt-4 flex justify-end">
                    <button class="mr-4 px-4 py-2 border rounded-md" @click="handleClose">Cancel</button>
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-md" @click="handleOk">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue';

// Define props
const props = defineProps<{
    open: boolean;
    className?: string;
    handleOk?: any;
    handleClose?: any;
}>();

// Destructure props and convert them to refs
const { open, className = '', handleOk, handleClose } = toRefs(props);

</script>
