<template>
    <div class="container py-5">
        <h1 class="text-primary">Welcome</h1>
        <p class="lead">{{ message }}</p>
    </div>
</template>

<script setup>
    defineProps(['message'])
</script>
