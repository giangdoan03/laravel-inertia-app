<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, usePage } from '@inertiajs/vue3';

    const { props } = usePage()
    const tasks = props.tasks
</script>

<template>
    <Head title="Danh sách công việc" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="fs-4 fw-bold text-dark">📋 Danh sách công việc</h2>
        </template>

        <div class="container">
            <div class="card shadow-sm">
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead class="table-light">
                        <tr>
                            <th>#</th>
                            <th>Tiêu đề</th>
                            <th>Hạn hoàn thành</th>
                            <th>Trạng thái</th>
                            <th>Ngày tạo</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(task, index) in tasks" :key="task.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ task.title }}</td>
                            <td>{{ task.due_date ?? '—' }}</td>
                            <td>
                                <span class="badge bg-secondary" v-if="task.status === 'pending'">Chờ xử lý</span>
                                <span class="badge bg-info text-dark" v-else-if="task.status === 'in_progress'">Đang làm</span>
                                <span class="badge bg-success" v-else>Hoàn thành</span>
                            </td>
                            <td>{{ new Date(task.created_at).toLocaleString() }}</td>
                        </tr>
                        <tr v-if="tasks.length === 0">
                            <td colspan="5" class="text-center text-muted">Không có công việc nào</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
