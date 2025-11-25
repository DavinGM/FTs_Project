<template>
  <section 
    class="relative w-full py-44 text-white bg-cover bg-center bg-no-repeat"
    style="background-image: url('/about2.png');"
    data-aos="fade-up"
  >

    <!-- Overlay sangat tipis (bukan abu) -->
    <div class="absolute inset-0 bg-black/20"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">

      <!-- JUDUL -->
      <h2
        class="text-center text-4xl sm:text-5xl font-extrabold mb-20
               bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        About
      </h2>

      <!-- DESKRIPSI -->
       <p 
  class="max-w-2xl text-[20px] text-blue-900 leading-relaxed mb-10 font-semibold
         drop-shadow-[0_0_6px_rgba(30,58,138,0.55)]
         tracking-wide"
  data-aos="fade-up"
  data-aos-delay="150"
>
  Kami adalah tim pengembang yang fokus menghadirkan solusi digital modern, cepat, responsif, aman, dan mudah digunakan.
</p>



      <!-- TOMBOL -->
      <div 
        class="flex flex-col sm:flex-row gap-4"
        data-aos="fade-up"
        data-aos-delay="250"
      >

        <!-- Direksi -->
        <button
          class="w-full sm:w-56 px-5 py-3 
                 bg-white/5 border border-white/25 rounded-xl 
                 backdrop-blur-md text-left text-[15px] font-medium 
                 text-gray-200 hover:bg-white/10 hover:border-white/40 
                 transition-all flex items-center justify-between"
        >
          Direksi
          <i class="bi bi-arrow-up-right text-lg"></i>
        </button>

        <!-- Project Manager -->
        <button
          class="w-full sm:w-56 px-5 py-3 
                 bg-white/5 border border-white/25 rounded-xl 
                 backdrop-blur-md text-left text-[15px] font-medium 
                 text-gray-200 hover:bg-white/10 hover:border-white/40 
                 transition-all flex items-center justify-between"
        >
          Project Manager
          <i class="bi bi-arrow-up-right text-lg"></i>
        </button>

      </div>

    </div>
  </section>
</template>
