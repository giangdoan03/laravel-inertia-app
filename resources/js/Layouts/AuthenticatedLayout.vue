<script setup>
    import { Link, usePage } from '@inertiajs/vue3'

    const { props } = usePage()
</script>

<template>
    <!-- Topbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-sidebar px-4">
        <div class="container-fluid">
            <span class="navbar-brand">🧑‍💻 Admin Panel</span>

            <div class="ms-auto d-flex align-items-center">
        <span class="text-white me-3">
          👋 Xin chào, {{ props.auth.user.name }}
        </span>
                <form method="POST" :action="route('logout')">
                    <input type="hidden" name="_token" :value="props.csrf_token || ''">
                    <button type="submit" class="btn btn-outline-light btn-sm">Đăng xuất</button>
                </form>
            </div>
        </div>
    </nav>

    <!-- Main Layout -->
    <div class="d-flex" style="min-height: 100vh;">
        <!-- Sidebar -->
        <aside class="bg-sidebar text-white p-3" style="width: 250px;">
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
        </aside>

        <!-- Nội dung chính -->
        <main class="flex-grow-1 p-4 bg-light">
            <header class="mb-4">
                <slot name="header" />
            </header>
            <section>
                <slot />
            </section>
        </main>
    </div>
</template>
