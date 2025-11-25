<template>
  <section 
    class="py-20 bg-gray-950 text-white"
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <span 
          class="text-indigo-400 font-semibold tracking-wide uppercase"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ekosistem
        </span>

        <h2 
          class="mt-3 text-5xl font-extrabold sm:text-5xl bg-clip-text text-transparent 
                 bg-gradient-to-r from-white to-gray-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ruanglingkup Proyek
        </h2>

        <p 
          class="mt-5 text-lg text-gray-400 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Kami Bukan hanya sebuah tim, kami adalah ekosistem proyek yang berkembang dengan cepat.
        </p>
      </div>

      <!-- Grid Logo -->
      <div 
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 
           items-center justify-items-center"
>
    <div 
        v-for="(partner, index) in partners" 
        :key="partner.name"
        
        class="flex items-center justify-center w-full h-56" 
        
        data-aos="zoom-in"
        :data-aos-delay="150 + index * 120"
    >
        <a 
            :href="partner.link" 
            target="_blank" 
            class="transition transform hover:scale-110"
        >
            <img 
                :src="partner.logo" 
                :alt="partner.name" 
                
                class="object-contain h-48 opacity-50 hover:opacity-100 transition duration-300" 
            />
        </a>
    </div>
</div>  
      
    </div>
  </section>
</template>

<script setup>
const partners = [
  { name: "Fts Project", logo: "/fts_Project.png", link: "" },
  { name: "Ryn Project", logo: "/RynProject.png", link: "" },
  { name: "Yarn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yarn-logo-kitten.svg/250px-Yarn-logo-kitten.svg.png", link: "" },
  { name: "Akona", logo: "/Akona.png", link: "https://www.bukalapak.com" },
  { name: "Dabian", logo: "/images/partners/traveloka.png", link: "https://www.traveloka.com" },
];
</script>

