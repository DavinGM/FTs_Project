<template>
  <section class="py-24 bg-black text-white relative">

    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- TOP TITLE -->
      <div class="mb-10">
        <p 
          class="text-[14px] text-blue-600 font-semibold tracking-wide drop-shadow-md"
          data-aos="fade-up"
        >
          NLFTs Company (2020)
        </p>

        <h2 
          class="mt-2 text-4xl sm:text-5xl font-extrabold text-white max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          NLFTs Perusahaan indie yang menaungi lebih dari 5 Project di tahun 2025
        </h2>
      </div>

      <!-- MIDDLE PARAGRAPH -->
      <p 
        class="text-lg text-gray-400 max-w-4xl leading-relaxed mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        NLFTs Company kembali mengukir prestasi sebagai Perusahaan Digital dan Development 
        yang mampu bersaing dan membuka peluang kerja besar yang terdaftar di 19 cabang perusahaan.
      </p>

      <!-- BUTTON RIGHT -->
      <div 
        class="flex justify-end mb-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <a 
          href="#"
          class="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition 
                 text-white text-sm font-medium backdrop-blur-md flex items-center gap-2"
        >
          Selengkapnya →
        </a>
      </div>

      <!-- HR -->
      <hr class="border-gray-700/60 mb-14" />

      <!-- 3 COLUMNS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <!-- BAGIAN 1 -->
        <div 
          class="p-6 bg-gray-900/40 rounded-2xl border border-gray-700/50"
          data-aos="zoom-in-up"
        >
          <p class="text-blue-600 text-sm font-semibold mb-2">
            Pendapatan (2024)
          </p>

          <!-- COUNTER -->
          <h3 
            class="text-5xl font-extrabold text-white flex items-end gap-2"
          >
            <span ref="revCounter" class="count-up">0</span>
            <span class="text-xl">juta</span>
          </h3>

          <p class="mt-4 text-gray-300 text-base leading-relaxed">
            Jumlah pendapatan ini diperkirakan dapat meningkat hingga tahun 2026.
          </p>
        </div>

        <!-- BAGIAN 2 -->
        <div 
          class="p-6 bg-gray-900/40 rounded-2xl border border-gray-700/50"
          data-aos="zoom-in-up"
          data-aos-delay="150"
        >
          <p class="text-blue-600 text-sm font-semibold mb-2">
            Total Kontribusi
          </p>

          <h3 class="text-5xl font-extrabold text-white flex items-end gap-2">
            <span ref="contribCounter" class="count-up">0</span>
            <span class="text-xl">people</span>
          </h3>

          <p class="mt-4 text-gray-300 text-base leading-relaxed">
            Jumlah perolehan team pada tahun 2025.
          </p>
        </div>

        <!-- BAGIAN 3 -->
        <div 
          class="p-6 bg-gray-900/40 rounded-2xl border border-gray-700/50"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <p class="text-blue-600 text-sm font-semibold mb-2">
            ECT NLFTs
          </p>

          <h3 class="text-5xl font-extrabold text-white flex items-end gap-2">
            <span ref="esgCounter" class="count-up">0</span>
            <span class="text-xl">(medium risk)</span>
          </h3>

          <p class="mt-4 text-gray-300 text-base leading-relaxed">
            ECT Risk Rating terbaru NLFTs Company.
          </p>
        </div>

      </div>

    </div>

  </section>
</template>


<script setup>
import { onMounted, ref } from "vue";

const revCounter = ref(null);
const contribCounter = ref(null);
const esgCounter = ref(null);

function animateValue(el, start, end, duration) {
  let startTime = null;

  function step(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);

    const value = (progress * (end - start) + start).toFixed(2);
    el.innerText = value;

    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        if (e.target === revCounter.value) animateValue(e.target, 0, 0.02, 1500);
        if (e.target === contribCounter.value) animateValue(e.target, 0, 3.12, 1500);
        if (e.target === esgCounter.value) animateValue(e.target, 0, 10.9, 1500);
      }
    });
  });

  observer.observe(revCounter.value);
  observer.observe(contribCounter.value);
  observer.observe(esgCounter.value);
});
</script>
