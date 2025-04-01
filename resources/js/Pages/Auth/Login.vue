<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'

defineProps({
    canResetPassword: Boolean,
    status: String,
})

const form = useForm({
    email: '',
    password: '',
    remember: false,
})

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <GuestLayout>
        <Head title="Đăng nhập" />

        <div class="container d-flex justify-content-center align-items-center" style="min-height: 80vh;">
            <div class="card shadow-sm p-4" style="width: 100%; max-width: 400px;">
                <h4 class="text-center mb-4">🔐 Đăng nhập hệ thống</h4>

                <!-- Thông báo trạng thái -->
                <div v-if="status" class="alert alert-success py-2 text-center small mb-3">
                    {{ status }}
                </div>

                <form @submit.prevent="submit">
                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.email }"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />
                        <div class="invalid-feedback" v-if="form.errors.email">
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="mb-3">
                        <label for="password" class="form-label">Mật khẩu</label>
                        <input
                            id="password"
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.password }"
                            v-model="form.password"
                            required
                            autocomplete="current-password"
                        />
                        <div class="invalid-feedback" v-if="form.errors.password">
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <!-- Remember me -->
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" id="remember" v-model="form.remember" />
                        <label class="form-check-label" for="remember">Ghi nhớ đăng nhập</label>
                    </div>

                    <!-- Nút & link -->
                    <div class="d-flex justify-content-between align-items-center">
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="small text-decoration-none"
                        >
                            Quên mật khẩu?
                        </Link>

                        <button
                            type="submit"
                            class="btn btn-primary"
                            :disabled="form.processing"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>
