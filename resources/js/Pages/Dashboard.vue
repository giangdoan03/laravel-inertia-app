<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="fw-bold fs-4 text-dark mb-0">📊 Thống kê tổng quan</h2>
        </template>

        <div class="container-fluid">
            <!-- Cards -->
            <div class="row g-3 mb-4">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <h6 class="card-title text-muted">👥 Người dùng</h6>
                            <h3 class="fw-bold mb-0">120</h3>
                            <small class="text-success">+5% so với tuần trước</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <h6 class="card-title text-muted">📝 Nhiệm vụ</h6>
                            <h3 class="fw-bold mb-0">48</h3>
                            <small class="text-danger">-2% so với tuần trước</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <h6 class="card-title text-muted">📦 Dự án</h6>
                            <h3 class="fw-bold mb-0">7</h3>
                            <small class="text-muted">Không đổi</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Biểu đồ placeholder -->
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title">📈 Biểu đồ công việc</h5>
                    <div class="text-center text-muted py-5">[ Sẽ thay bằng biểu đồ sau ]</div>
                </div>
            </div>

            <!-- Danh sách hoạt động gần đây -->
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title mb-3">🕒 Hoạt động gần đây</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">👤 Giang Doan đã đăng nhập lúc 09:30</li>
                        <li class="list-group-item">✅ Bạn đã hoàn thành nhiệm vụ "Thiết kế giao diện"</li>
                        <li class="list-group-item">✏️ Admin cập nhật trạng thái dự án A</li>
                    </ul>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
