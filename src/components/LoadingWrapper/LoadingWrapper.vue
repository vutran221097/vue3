<script setup lang="ts">
import { toRefs } from 'vue';
import { useAuthStore } from '../../store/auth';
import { getUser } from '../../services/userService';

const authStore = useAuthStore();
const { login, userUid, userInfo } = toRefs(authStore);

const handleInitApp = async () => {
    const user = await getUser(userUid.value)
    userInfo.value = user
}


if (login?.value) {
    handleInitApp()
}

</script>

<template>
    <slot></slot>
</template>