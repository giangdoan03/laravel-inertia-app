<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
    <GuestLayout>
        <Head title="Đăng ký" />

        <div class="container d-flex justify-content-center align-items-center" style="min-height: 80vh;">
            <div class="card shadow-sm p-4" style="width: 100%; max-width: 450px;">
                <h4 class="text-center mb-4">📝 Đăng ký tài khoản</h4>

                <form @submit.prevent="submit">
                    <!-- Họ tên -->
                    <div class="mb-3">
                        <label for="name" class="form-label">Họ và tên</label>
                        <input
                            id="name"
                            type="text"
                            class="form-control"
                            v-model="form.name"
                            :class="{ 'is-invalid': form.errors.name }"
                            required
                            autofocus
                            autocomplete="name"
                        />
                        <div class="invalid-feedback" v-if="form.errors.name">
                            {{ form.errors.name }}
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            class="form-control"
                            v-model="form.email"
                            :class="{ 'is-invalid': form.errors.email }"
                            required
                            autocomplete="username"
                        />
                        <div class="invalid-feedback" v-if="form.errors.email">
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <!-- Mật khẩu -->
                    <div class="mb-3">
                        <label for="password" class="form-label">Mật khẩu</label>
                        <input
                            id="password"
                            type="password"
                            class="form-control"
                            v-model="form.password"
                            :class="{ 'is-invalid': form.errors.password }"
                            required
                            autocomplete="new-password"
                        />
                        <div class="invalid-feedback" v-if="form.errors.password">
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <!-- Nhập lại mật khẩu -->
                    <div class="mb-3">
                        <label for="password_confirmation" class="form-label">Nhập lại mật khẩu</label>
                        <input
                            id="password_confirmation"
                            type="password"
                            class="form-control"
                            v-model="form.password_confirmation"
                            :class="{ 'is-invalid': form.errors.password_confirmation }"
                            required
                            autocomplete="new-password"
                        />
                        <div class="invalid-feedback" v-if="form.errors.password_confirmation">
                            {{ form.errors.password_confirmation }}
                        </div>
                    </div>

                    <!-- Nút & link -->
                    <div class="d-flex justify-content-between align-items-center">
                        <Link :href="route('login')" class="small text-decoration-none">
                            Đã có tài khoản?
                        </Link>

                        <button type="submit" class="btn btn-success" :disabled="form.processing">
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>
