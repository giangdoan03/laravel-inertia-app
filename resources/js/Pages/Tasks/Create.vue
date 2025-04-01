<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, useForm } from '@inertiajs/vue3'

    const form = useForm({
        title: '',
        description: '',
        due_date: ''
    })

    function submit() {
        form.post(route('tasks.store'))
    }
</script>

<template>
    <Head title="Tạo công việc" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="fs-4 fw-bold text-dark">📝 Tạo công việc mới</h2>
        </template>

        <div class="container">
            <div class="card p-4 shadow-sm">
                <form @submit.prevent="submit">
                    <div class="mb-3">
                        <label class="form-label">Tiêu đề</label>
                        <input v-model="form.title" type="text" class="form-control" :class="{ 'is-invalid': form.errors.title }" />
                        <div class="invalid-feedback" v-if="form.errors.title">{{ form.errors.title }}</div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Mô tả</label>
                        <textarea v-model="form.description" class="form-control" rows="4" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Hạn hoàn thành</label>
                        <input v-model="form.due_date" type="date" class="form-control" />
                    </div>

                    <button class="btn btn-primary" :disabled="form.processing">Tạo công việc</button>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
