<template>
    <footer class="bg-[#050505] text-gray-300 pt-20 pb-10">
  <div class="max-w-7xl mx-auto px-6">

    <!-- TOP SECTION -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

      <!-- Brand + Description -->
      <div>
        <h3 class="text-2xl font-bold text-white mb-4 tracking-wide">NLFTs</h3>
        <p class="text-gray-400 leading-relaxed mb-6">
          Perusahaan Digital & Development global yang fokus pada inovasi, keamanan data, dan solusi modern untuk bisnis masa depan.
        </p>

        <!-- Social Media -->
        <div class="flex items-center gap-4 mt-4">
          <a href="#" class="hover:text-white transition">
            <i class="fa-brands fa-facebook-f text-lg"></i>
          </a>
          <a href="#" class="hover:text-white transition">
            <i class="fa-brands fa-x-twitter text-lg"></i>
          </a>
          <a href="#" class="hover:text-white transition">
            <i class="fa-brands fa-instagram text-lg"></i>
          </a>
          <a href="#" class="hover:text-white transition">
            <i class="fa-brands fa-linkedin text-lg"></i>
          </a>
        </div>
      </div>

      <!-- Product -->
      <div>
        <h4 class="text-white text-lg font-semibold mb-5">Products</h4>
        <ul class="space-y-3 text-gray-400">
          <li><a href="#" class="hover:text-white transition">API Services</a></li>
          <li><a href="#" class="hover:text-white transition">Cloud Services</a></li>
          <li><a href="#" class="hover:text-white transition">Dabian</a></li>
          <li><a href="#" class="hover:text-white transition">Web Development</a></li>
          <li><a href="#" class="hover:text-white transition">Mobile Apps</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="text-white text-lg font-semibold mb-5">Company</h4>
        <ul class="space-y-3 text-gray-400">
          <li><a href="#" class="hover:text-white transition">About Us</a></li>
          <li><a href="#" class="hover:text-white transition">Careers</a></li>
          <li><a href="#" class="hover:text-white transition">Our Projects</a></li>
          <li><a href="#" class="hover:text-white transition">Partners</a></li>
          <li><a href="#" class="hover:text-white transition">News & Media</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="text-white text-lg font-semibold mb-5">Support</h4>
        <ul class="space-y-3 text-gray-400">
          <li><a href="#" class="hover:text-white transition">Help Center</a></li>
          <li><a href="#" class="hover:text-white transition">Documentation</a></li>
          <li><a href="#" class="hover:text-white transition">Community Forum</a></li>
          <li><a href="#" class="hover:text-white transition">Report Issues</a></li>
          <li><a href="#" class="hover:text-white transition">Contact Support</a></li>
        </ul>
      </div>
    </div>

    <!-- SUBSCRIBE SECTION -->
    <div class="border-t border-gray-800 pt-12 pb-16">
      <div class="md:flex justify-between items-center">
        
        <div class="max-w-md mb-6 md:mb-0">
          <h4 class="text-white text-xl font-semibold mb-4">Update</h4>
          <p class="text-gray-400 mb-5">
            Dapatkan update terbaru tentang teknologi, project global, dan inovasi dari NLFTs.
          </p>
        </div>

        <form class="flex gap-3 w-full md:w-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="w-full md:w-72 px-4 py-3 rounded-xl bg-[#111] border border-gray-700 text-white placeholder-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-700 outline-none"
          >
          <button 
            class="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold transition">
            Subscribe
          </button>
        </form>

      </div>
    </div>

    <!-- ADDRESS -->
    <div class="border-t border-gray-800 pt-10 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <h4 class="text-white font-semibold mb-3 text-lg">Markas Besar</h4>
          <p class="text-gray-400">
            NLFTs Company,   
            Bandung, Indonesia
          </p>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-3 text-lg">Cabang</h4>
          <p class="text-gray-400">
             Yogyakarta Jawa Timur • Bandung • Jakarta • Sulawesi Selatan • Cimahi Jawa Barat  
            + 6 Lainnya
          </p>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-3 text-lg">kontak</h4>
          <p class="text-gray-400">
            Email: nlfts.etc@gmail.com<br>
            phone: +62 882-0012-89177
          </p>
        </div>

      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
      <p>© 2025 FTs Project. All Rights Reserved.</p>

      <div class="flex gap-6 mt-3 md:mt-0">
        <a href="#" class="hover:text-white transition">Privacy Policy</a>
        <a href="#" class="hover:text-white transition">Terms of Service</a>
        <a href="#" class="hover:text-white transition">Cookies Policy</a>
      </div>
    </div>

  </div>
</footer>

</template>