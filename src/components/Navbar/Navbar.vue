<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { signOut, getAuth } from 'firebase/auth';

import { useAuthStore } from '../../store/auth';
import BaseModal from '../BaseModal/BaseModal.vue';

const authStore = useAuthStore();
const { login, userInfo } = toRefs(authStore);
const dropdownOpen = ref(false);
const confirmLogoutModal = ref(false);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        authStore.setLogout();
    }).catch((error: any) => {
        // An error happened.
        console.log(error);
    });
    confirmLogoutModal.value = false;
};

const handleOpenModalLogout = () => {
    confirmLogoutModal.value = true;
}

const handleCloseModalLogout = () => {
    confirmLogoutModal.value = false;
}

const mediaQuery = window.matchMedia('(min-width: 768px)');
if (!mediaQuery.matches) {
    dropdownOpen.value = false;
}
</script>

<template>
    <BaseModal :open="confirmLogoutModal" :handleOk="handleLogout" :handleClose="handleCloseModalLogout">
        Are you sure you want to logout?
    </BaseModal>
    <nav class="bg-main border-gray-200 px-10">
        <div class="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/src/assets/logo.png" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap ">Book</span>
            </router-link>
            <button @click="toggleDropdown" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div v-if="login" :class="{ 'hidden': !dropdownOpen, 'block top-14 left-0': dropdownOpen }"
                class="w-full absolute md:static md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-main md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                        <router-link to="/upload-book"
                            class="py-2 px-3 flex items-center gap-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                            <span>
                                <img src="/src/assets/upload.svg" class="w-8 h-8 rounded-full" alt="Upload Book" />
                            </span> Upload
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/profile"
                            class="py-2 px-3 flex items-center gap-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                            <span>
                                <img :src="userInfo?.photoURL || `https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png`"
                                    class="w-8 h-8 rounded-full" alt="User Profile" />
                            </span> {{ userInfo?.displayName || userInfo?.email || 'Profile' }}
                        </router-link>
                    </li>
                    <li>
                        <p @click="handleOpenModalLogout"
                            class="cursor-pointer py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                            Logout</p>
                    </li>
                </ul>
            </div>
            <div v-else :class="{ 'hidden': !dropdownOpen, 'block top-14 left-0': dropdownOpen }"
                class="w-full absolute md:static md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-main md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                        <router-link to="/login"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Login</router-link>
                    </li>
                    <li>
                        <router-link to="/register"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Sign
                            Up</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>