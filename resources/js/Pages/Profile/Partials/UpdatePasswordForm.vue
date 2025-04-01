<script setup>
    import { ref } from 'vue'
    import { useForm } from '@inertiajs/vue3'

    const passwordInput = ref(null)
    const currentPasswordInput = ref(null)

    const form = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    const updatePassword = () => {
        form.put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
            onError: () => {
                if (form.errors.password) {
                    form.reset('password', 'password_confirmation')
                    passwordInput.value.focus()
                }
                if (form.errors.current_password) {
                    form.reset('current_password')
                    currentPasswordInput.value.focus()
                }
            },
        })
    }
</script>

<template>
    <section>
        <h4 class="mb-3 text-primary">🔒 Đổi mật khẩu</h4>

        <form @submit.prevent="updatePassword">
            <!-- Mật khẩu hiện tại -->
            <div class="mb-3">
                <label for="current_password" class="form-label">Mật khẩu hiện tại</label>
                <input
                    id="current_password"
                    type="password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.current_password }"
                    autocomplete="current-password"
                />
                <div class="invalid-feedback" v-if="form.errors.current_password">
                    {{ form.errors.current_password }}
                </div>
            </div>

            <!-- Mật khẩu mới -->
            <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu mới</label>
                <input
                    id="password"
                    type="password"
                    ref="passwordInput"
                    v-model="form.password"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.password }"
                    autocomplete="new-password"
                />
                <div class="invalid-feedback" v-if="form.errors.password">
                    {{ form.errors.password }}
                </div>
            </div>

            <!-- Xác nhận lại -->
            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Nhập lại mật khẩu</label>
                <input
                    id="password_confirmation"
                    type="password"
                    v-model="form.password_confirmation"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.password_confirmation }"
                    autocomplete="new-password"
                />
                <div class="invalid-feedback" v-if="form.errors.password_confirmation">
                    {{ form.errors.password_confirmation }}
                </div>
            </div>

            <!-- Submit -->
            <div class="d-flex align-items-center gap-3">
                <button type="submit" class="btn btn-primary" :disabled="form.processing">
                    Lưu thay đổi
                </button>

                <span v-if="form.recentlySuccessful" class="text-success small">Đã lưu thành công!</span>
            </div>
        </form>
    </section>
</template>
