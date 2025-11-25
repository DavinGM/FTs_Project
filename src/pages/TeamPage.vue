<template>
  <LYS1_Layout>
    <Navbar />

    <section class="py-20 bg-gray-900 text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header Section -->
        <div class="text-center mb-16">
          <span class="text-indigo-400 font-semibold tracking-wide uppercase">
            FULL TEAM
          </span>
          <h2 class="mt-2 text-4xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Semua Anggota Tim
          </h2>
          <p class="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Menampilkan seluruh anggota tim proyek ini.
          </p>
        </div>

        <!-- Grid semua anggota -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="member in teamMembers" :key="member.name"
               class="flex bg-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg hover:shadow-indigo-500/50 transition-transform transform hover:scale-[1.03] duration-500">
            
            <!-- Gambar Kiri -->
            <div class="md:w-1/3">
              <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover"/>
            </div>

            <!-- Konten Kanan -->
            <div class="md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white">{{ member.name }}</h3>
                <p class="text-md text-indigo-400 font-medium mt-1">{{ member.role }}</p>
                
                <!-- Website bersih -->
                <p class="mt-3 text-sm text-gray-300 break-all">
                  Website: 
                  <a :href="member.portfolio" target="_blank" class="text-indigo-400 hover:underline">
                    {{ cleanUrl(member.portfolio) }}
                  </a>
                </p>

                <!-- GitHub -->
                <p v-if="member.github" class="mt-1 text-sm text-gray-300 break-all">
                  GitHub: 
                  <a :href="member.github" target="_blank" class="text-indigo-400 hover:underline">
                    {{ cleanUrl(member.github) }}
                  </a>
                </p>
              </div>

              <!-- Media Sosial bawah kanan -->
              <div class="mt-4 flex space-x-4 justify-end">
                <a v-if="member.instagram" :href="member.instagram" target="_blank" class="text-gray-300 hover:text-pink-500 transition duration-300" aria-label="Instagram">
                  <i class="bi bi-instagram text-lg"></i>
                </a>
                <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="text-gray-300 hover:text-blue-500 transition duration-300" aria-label="LinkedIn">
                  <i class="bi bi-linkedin text-lg"></i>
                </a>
                <a v-if="member.x" :href="member.x" target="_blank" class="text-gray-300 hover:text-blue-400 transition duration-300" aria-label="X">
                  <i class="bi bi-x text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Button Back to Home -->
        <div class="mt-12 flex justify-end">
          <a href="/" 
             class="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300">
            ← Back to Home
          </a>
        </div>

      </div>
    </section>
  </LYS1_Layout>
</template>

<script setup>
import LYS1_Layout from '../layouts/LYS1_Layout.vue';
import Navbar from '../components/Navbar.vue';
import { teamMembers } from "@/mock-data.js";

const cleanUrl = (url) => {
  try {
    const u = new URL(url);
    return u.hostname.replace('www.', '');
  } catch (e) {
    return url;
  }
}
</script>

<style scoped>
/* bisa tambah hover / efek tambahan jika perlu */
</style>
