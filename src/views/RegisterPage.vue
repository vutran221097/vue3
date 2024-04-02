<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import BaseInput from '@/components/BaseInput/BaseInput.vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import { signUpSchema } from '@/utils/validate';
import { postUser } from '@/services/userService.ts';
import { ErrorMessage } from '@/utils/error';

const router = useRouter();
const isSubmit = ref(false);

const createUserWithFireStore = (data: any) => {
    postUser(data);
}

const onSubmit = async (formData: any) => {
    try {
        isSubmit.value = true;
        const res = await createUserWithEmailAndPassword(getAuth(), formData.email, formData.password);
        if (res) {
            createUserWithFireStore(res.user);
            router.push({ name: 'LoginPage', state: { message: 'Account created successfully' } })
        }
    } catch (e) {
        ErrorMessage(e)
    } finally {
        isSubmit.value = false;
    }
}

</script>

<template>
    <section class="h-full pt-20 bg-detail">
        <div class="flex flex-col items-center justify-start px-6 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-main rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Create and account
                    </h1>
                    <Form class="space-y-4" @submit="onSubmit" :validation-schema="signUpSchema">
                        <div>
                            <BaseInput name="email" type="email" label="Your email" placeholder="account@gmail.com"
                                required />
                        </div>
                        <div>
                            <BaseInput name="password" type="password" label="Password" placeholder="••••••••"
                                required />
                        </div>
                        <div>
                            <BaseInput name="confirmPassword" type="password" label="Confirm Password"
                                placeholder="••••••••" required />

                        </div>
                        <BaseButton type="submit" :loading="isSubmit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secondary"
                            title="Create
                        an account" />
                        <p class="text-sm font-light text-center">
                            Already have an account? <router-link to="/login"
                                class="font-medium text-primary-600 hover:underline">Login
                                here</router-link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    </section>
</template>