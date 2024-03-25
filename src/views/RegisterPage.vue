<script setup lang="ts">
import { Form } from 'vee-validate';
import BaseInput from '../components/BaseInput/BaseInput.vue';
import { signUpSchema } from '../utils/vailidate';

const onSubmit = (formData: any) => {
    console.log('formData', formData);
}
</script>

<template>
    <section class=" h-full pt-20">
        <div class="flex flex-col items-center justify-start px-6 mx-auto md:h-screen lg:py-0">
            <div class="w-full main-color rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0 ">
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
                        <button type="submit"
                            class="w-full btn-color text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create
                            an account</button>
                        <p class="text-sm font-light  text-center">
                            Already have an account? <a href="/login"
                                class="font-medium text-primary-600 hover:underline">Login
                                here</a>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>