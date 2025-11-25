
<template>
    <section class="relative h-screen bg-cover bg-center" style="background-image: url('/ind.jpg');">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
    
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
            
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fadeInUp">
                Percayakan Bisnis Anda Pada Kami
            </h1>
    
            <p class="font-bold text-xl md:text-2xl text-[#34d399] max-w-3xl mb-10 opacity-90 animate-fadeInUp delay-100">
                Jelajahi solusi inovatif kami yang dirancang untuk mengubah ide besar Anda menjadi kenyataan yang sukses dan terukur.
            </p>
    
            <div class="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-200">
                <a href="#" class="px-8 py-3 text-lg font-semibold rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105">
                    Mulai Sekarang →
                </a>
                <a href="#" class="px-8 py-3 text-lg font-semibold rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105">
                    Lihat Demo
                </a>
            </div>
    
        </div>
    </section>

</template>    
<style scoped>
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-fadeInUp {
        animation: fadeInUp 1s ease-out forwards;
        opacity: 0; /* Mulai dengan opacity 0 */
    }
    .delay-100 {
        animation-delay: 0.1s;
    }
    .delay-200 {
        animation-delay: 0.2s;
    }
</style>