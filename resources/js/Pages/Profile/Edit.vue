<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import DeleteUserForm from './Partials/DeleteUserForm.vue';
    import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
    import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
    import { Head } from '@inertiajs/vue3';

    defineProps({
        mustVerifyEmail: Boolean,
        status: String,
    });
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="fw-bold fs-4 text-dark mb-0">⚙️ Hồ sơ người dùng</h2>
        </template>

        <div class="container mt-4">
            <div class="row gy-4">
                <!-- Cập nhật thông tin -->
                <div class="col-12">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <UpdateProfileInformationForm
                                :must-verify-email="mustVerifyEmail"
                                :status="status"
                            />
                        </div>
                    </div>
                </div>

                <!-- Đổi mật khẩu -->
                <div class="col-12">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <UpdatePasswordForm />
                        </div>
                    </div>
                </div>

                <!-- Xoá tài khoản -->
                <div class="col-12">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <DeleteUserForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
