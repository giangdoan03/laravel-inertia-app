<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
    <h5 class="mb-4">Menu</h5>
    <ul class="nav flex-column">
        <li class="nav-item mb-2">
            <Link class="nav-link text-white" href="/">🏠 Dashboard</Link>
        </li>
        <li class="nav-item mb-2">
            <Link class="nav-link text-white" href="/tasks">📋 Danh sách công việc</Link>
        </li>
        <li class="nav-item mb-2">
            <Link class="nav-link text-white" href="/tasks/create">🆕 Tạo công việc</Link>
        </li>
        <li class="nav-item mb-2">
            <Link class="nav-link text-white" href="/profile">⚙️ Hồ sơ</Link>
        </li>
    </ul>
</template>
