<template>
  <section class="py-24 bg-gray-950 text-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="flex justify-between items-start mb-14">

        <!-- Text Kiri -->
        <div data-aos="fade-right">
          <span class="text-blue-900 font-semibold text-sm tracking-wide uppercase block mb-3">
            KEBERLANJUTAN
          </span>

          <h2 class="text-3xl sm:text-4xl font-bold leading-snug mb-4">
            Keberlanjutan
          </h2>

          <p class="text-gray-400 max-w-xl leading-relaxed">
            NLFTs berdedikasi terhadap Project Project kecil yang mendorong badan usaha mitra kami. Kepemilikan atas 
            Project inilah yang sanggta berdampak pada keberlanjutan Project FTs.
          </p>
        </div>

        <!-- Tombol Selengkapnya -->
        <div data-aos="fade-left">
          <a
            href="#"
            class="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full
                   hover:bg-white/10 transition backdrop-blur-md"
          >
            Selengkapnya
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>

      <!-- Grid 3 Card -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="item in cards"
          :key="item.title"
          class="bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-lg
                 hover:shadow-blue-600/20 transition"
          data-aos="fade-up"
        >
          <img :src="item.image" class="w-full h-52 object-cover" />

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 tracking-wide">
              {{ item.title }}
            </h3>

            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              {{ item.desc }}
            </p>

            <!-- Tombol Selengkapnya -->
            <a
              href="#"
              class="flex items-center gap-2 text-sm px-5 py-2 border border-gray-500/40
                     rounded-full w-max hover:bg-white/10 transition"
            >
              Selengkapnya
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: "Pencapaian Enterprice Technology collective",
    desc: "Pengakuan yang mencerminkan upaya keberlanjutan NLFTs.",
    image: "/Development.png",
  },
  {
    title: "Komitmen dan Inovasi",
    desc: "Menaikkan kinerja dan membangun komitmen terhadap keberlanjutan dan terbuka akan teknologi terbaru.",
    image: "/react.png",
  },
  {
    title: "Laporan dan Publikasi",
    desc: "Setiap Lapotan dan Publikasi yang dilakukan bersifatTranparansi dan Konsistensi.",
    image: "/publikasi.png",
  },
];
</script>

<style scoped>
/* Optional custom hover */
</style>
