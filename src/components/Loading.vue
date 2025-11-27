<template>
  <div class="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50">
    <div class="text-center">
      <p class="text-3xl font-bold animate-pulse">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const text = ref('Loading');

onMounted(() => {
  // ganti tulisan menjadi "Loading selesai" setelah 2 detik
  setTimeout(() => {
    text.value = 'Loading selesai';
  }, 2000);
});
</script>

<style scoped>
/* Animasi tambahan jika mau */
.animate-pulse {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
