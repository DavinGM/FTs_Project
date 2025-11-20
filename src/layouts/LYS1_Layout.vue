<!-- layouts/LYS1_Layout.vue -->
<template>
  <div class="layout-wrapper">
    <slot />
  </div>
</template>

<style scoped>
.layout-wrapper {
    width: 100%;           /* hampir full layar */
    max-width: 1600px;    /* biar tetap modern */
    margin: 0 auto;       /* tengah ke kanan-kiri */
    padding-bottom: 40px; /* batas bawah */
}
</style>
