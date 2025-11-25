<template>
    <header>
         <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <p class="text-2xl font-bold text-blue-600">NLFTs</p>
        </div>

        <!-- Menu desktop -->
<div class="hidden md:flex md:space-x-8 md:items-center">
    <!-- menu tengah jika ada masukan -->
</div>


        <!-- Buttons -->
        <div class="hidden md:flex md:items-center space-x-4">
          <a id="nav-team" href="/team" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-0">team</a>
          <a href="/docs" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium no-underline border-b-0">Docs</a>
        </div>

        <!-- Hamburger menu (mobile) -->
        <div class="flex items-center md:hidden">
          <button id="menu-btn" class="text-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden">
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team</a>
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Docs</a>
      <div class="px-4 py-2 space-y-2">
        <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</button>
        <button class="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">Sign Up</button>
      </div>
    </div>
  </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const menuActive = ref(false)
const toggleMenu = () => {
  menuActive.value = !menuActive.value
}


document.addEventListener('DOMContentLoaded', function() {
    // 1. Dapatkan elemen <a> untuk 'team'
    const teamLink = document.getElementById('nav-team');

    // Cek apakah elemen ditemukan
    if (!teamLink) {
        console.error("Elemen 'nav-team' tidak ditemukan.");
        return;
    }

    // 2. Dapatkan jalur (path) dari URL saat ini
    const currentPath = window.location.pathname;

    // 3. Terapkan Kondisi
    // Cek apakah jalur saat ini sama dengan '/team' (atau mengandung '/team', tergantung kebutuhan Anda)
    // Saya menggunakan .includes() agar lebih fleksibel, namun perbandingan === '/team' lebih spesifik.
    // Jika Anda ingin *hanya* berlaku saat URL-nya tepat /team, ganti menjadi: if (currentPath === '/team')
    if (currentPath.includes('/team')) {
        // 4. Lakukan modifikasi
        
        // Ubah atribut href menjadi '/home'
        teamLink.href = '/';
        
        // Ubah teks yang ditampilkan menjadi 'home'
        teamLink.textContent = 'home';

        // Opsional: Anda mungkin juga ingin mengubah kelas CSS jika diperlukan, 
        // tetapi dalam contoh ini, kita asumsikan kelasnya tetap sama.
        
        console.log("Navigasi 'team' telah diubah menjadi 'home'.");
    } else {
        console.log("Jalur saat ini bukan '/team', navigasi tetap 'team'.");
    }
});
</script>

