<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';

import BaseInput from '@/components/BaseInput/BaseInput.vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import { ErrorMessage } from '@/utils/utils';
import { bookSchema } from '@/utils/validate';
import { DATA_BASE } from '@/services/constant';
import { addDocument } from '@/services/BaseService';
import { toast } from 'vue3-toastify';

const isSubmit = ref(false);



const onSubmit = async (formData: any, { resetForm }: { resetForm: any }) => {
    try {
        isSubmit.value = true;
        await addDocument(DATA_BASE.BOOKS, formData);
        toast.success('Book uploaded successfully');
        // clear all fields
        resetForm();
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
            <div class="w-full bg-main rounded-lg shadow md:mt-0 sm:max-w-xxl xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Upload upload-book
                    </h1>
                    <Form class="space-y-4" @submit="onSubmit" :validationSchema="bookSchema">

                        <BaseInput name="bookName" type="text" label="Book Name" placeholder="Book Name" required />

                        <BaseInput name="author" type="text" label="Author" placeholder="Author" required />

                        <BaseInput name="genre" type="text" label="Genre" placeholder="Genre" required />

                        <BaseInput name="releaseYear" type="number" label="Release Year" placeholder="Release Year" />

                        <BaseButton type="submit" :loading="isSubmit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secondary"
                            title="Upload" />
                    </Form>
                </div>
            </div>
        </div>
    </section>
</template>@/utils/utils