<script setup>
import { ref } from 'vue'
import { usePage } from '@inertiajs/vue3'
import SidebarMenu from './SidebarMenu.vue'

const { props } = usePage()
const showSidebar = ref(false)
</script>

<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-sidebar px-lg-3">
        <div class="container-fluid">
            <!-- Nút toggle (chỉ mobile) -->
            <button class="navbar-toggler me-2" type="button" @click="showSidebar = !showSidebar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Tên app -->
            <span class="navbar-brand mb-0 h1">🧑‍💻 Admin Panel</span>

            <!-- Bên phải: xin chào + logout -->
            <div class="ms-auto d-flex align-items-center flex-wrap gap-2">
                <!-- Xin chào (ẩn trên mobile nếu cần) -->
                <span class="text-white d-none d-sm-inline">
                    👋 Xin chào, {{ props.auth.user.name }}
                </span>

                <!-- Logout form -->
                <form method="POST" :action="route('logout')" class="m-0">
                    <input type="hidden" name="_token" :value="props.csrf_token || ''">
                    <button type="submit" class="btn btn-outline-light btn-sm">
                        Đăng xuất
                    </button>
                </form>
            </div>
        </div>
    </nav>

    <!-- Layout chính -->
    <div class="d-flex" style="min-height: 100vh;">
        <!-- Sidebar PC (luôn hiển thị) -->
        <aside class="bg-sidebar text-white p-3 d-none d-lg-block" style="width: 250px;">
            <SidebarMenu />
        </aside>

        <!-- Sidebar Mobile (overlay) -->
        <aside
            v-if="showSidebar"
            class="bg-sidebar text-white p-3 sidebar-overlay d-lg-none"
        >
            <SidebarMenu />
        </aside>

        <!-- Nội dung -->
        <main class="flex-grow-1 p-2 p-sm-3 p-md-4 bg-light">
            <header class="mb-4">
                <slot name="header" />
            </header>
            <section>
                <slot />
            </section>
        </main>
    </div>
</template>


<style>
.sidebar-overlay {
    position: fixed;
    top: 56px; /* Chiều cao navbar */
    left: 0;
    width: 250px;
    height: calc(100% - 56px);
    z-index: 1050;
    background-color: #343a40;
}

@media (min-width: 992px) {
    .sidebar-overlay {
        position: relative;
        top: 0;
        height: auto;
    }
}

@media (max-width: 991.98px) {
    nav.navbar {
        position: sticky;
        top: 0;
        z-index: 1020;
        background-color: #343a40; /* hoặc giữ nguyên bg-sidebar */
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
}

</style>

