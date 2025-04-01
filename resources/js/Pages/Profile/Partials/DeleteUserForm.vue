<script setup>
    import { useForm } from '@inertiajs/vue3'
    import { ref, nextTick } from 'vue'

    const confirmingUserDeletion = ref(false)
    const passwordInput = ref(null)

    const form = useForm({
        password: '',
    })

    const confirmUserDeletion = () => {
        confirmingUserDeletion.value = true
        nextTick(() => passwordInput.value?.focus())
    }

    const deleteUser = () => {
        form.delete(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.value?.focus(),
            onFinish: () => form.reset(),
        })
    }

    const closeModal = () => {
        confirmingUserDeletion.value = false
        form.reset()
    }
</script>

<template>
    <section>
        <h4 class="mb-3 text-danger">⚠️ Xóa tài khoản</h4>

        <p class="text-muted mb-3 small">
            Khi bạn xóa tài khoản, toàn bộ dữ liệu sẽ bị xóa vĩnh viễn. Hãy chắc chắn rằng bạn đã sao lưu thông tin cần thiết.
        </p>

        <button class="btn btn-danger" @click="confirmUserDeletion">
            Xóa tài khoản
        </button>

        <!-- Modal xác nhận -->
        <div class="modal fade show" tabindex="-1" style="display: block;" v-if="confirmingUserDeletion">
            <div class="modal-dialog">
                <div class="modal-content border-danger">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title">Xác nhận xóa tài khoản</h5>
                        <button type="button" class="btn-close" @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Bạn có chắc chắn muốn xóa tài khoản? Nhập mật khẩu để xác nhận hành động này.
                        </p>
                        <div class="mb-3">
                            <label for="password" class="form-label">Mật khẩu</label>
                            <input
                                id="password"
                                type="password"
                                ref="passwordInput"
                                v-model="form.password"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.password }"
                                placeholder="Nhập mật khẩu"
                                @keyup.enter="deleteUser"
                            />
                            <div class="invalid-feedback" v-if="form.errors.password">
                                {{ form.errors.password }}
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" @click="closeModal">Hủy</button>
                        <button
                            class="btn btn-danger"
                            :disabled="form.processing"
                            @click="deleteUser"
                        >
                            Xác nhận xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Overlay nền xám -->
        <div class="modal-backdrop fade show" v-if="confirmingUserDeletion"></div>
    </section>
</template>
