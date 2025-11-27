<template>
  <Loading v-if="loading" />
  <router-view v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Loading from './components/Loading.vue';

const loading = ref(true);

onMounted(() => {
  // tampilkan loading minimal 3 detik
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>

<style>
/* global styling */
</style>
