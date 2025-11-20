<script setup>
import LYS1_Layout from '../layouts/LYS1_Layout.vue';
import Navbar from '../components/Navbar.vue';
import Team from '../components/Team.vue';
</script>

<template>
  <LYS1_Layout>
    <Navbar />
    <Team :showAll="true" /> <!-- tampil semua anggota -->
    <div class="mt-4 text-end">
            <a href="/" class="btn btn-primary">back to home</a>
        </div>
  </LYS1_Layout>
</template>

<style scoped>
/* styling khusus TeamPage */
</style>
