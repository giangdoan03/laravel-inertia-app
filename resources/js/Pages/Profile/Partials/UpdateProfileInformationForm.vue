<script setup>
    import { Link, useForm, usePage } from '@inertiajs/vue3'

    defineProps({
        mustVerifyEmail: Boolean,
        status: String
    })

    const user = usePage().props.auth.user

    const form = useForm({
        name: user.name,
        email: user.email,
    })
</script>

<template>
    <section>
        <h4 class="mb-3 text-primary">🧑 Cập nhật thông tin cá nhân</h4>

        <form @submit.prevent="form.patch(route('profile.update'))">
            <!-- Name -->
            <div class="mb-3">
                <label for="name" class="form-label">Tên</label>
                <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.name }"
                    required
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
                    v-model="form.email"
                    type="email"
                    id="email"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.email }"
                    required
                    autocomplete="username"
                />
                <div class="invalid-feedback" v-if="form.errors.email">
                    {{ form.errors.email }}
                </div>
            </div>

            <!-- Verify Email -->
            <div v-if="mustVerifyEmail && user.email_verified_at === null" class="mb-3">
                <p class="text-danger small">
                    Email của bạn chưa được xác minh.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="btn btn-link p-0 m-0 align-baseline"
                    >
                        Gửi lại email xác minh
                    </Link>
                </p>

                <div v-show="status === 'verification-link-sent'" class="text-success small">
                    Đã gửi lại liên kết xác minh đến email của bạn.
                </div>
            </div>

            <!-- Submit -->
            <div class="d-flex align-items-center gap-3">
                <button type="submit" class="btn btn-primary" :disabled="form.processing">
                    Lưu thay đổi
                </button>
                <span v-if="form.recentlySuccessful" class="text-success small">Đã lưu!</span>
            </div>
        </form>
    </section>
</template>
