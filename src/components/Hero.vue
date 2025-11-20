<template>
    <main class="hero-section" ref="heroSection">
        <div class="container">
            <div class="hero-content">
                <h1>Selamat Datang</h1>
                <p class="tagline">{{ currentTagline }}</p> 
                
                <div class="cta-group">
                    <a href="not_fund.html" 
                        class="btn btn-primary-outline border"
                        ref="ctaButton"
                        @mouseover="changeCtaColor" 
                        @mouseleave="resetCtaColor">
                        Dowload My FTs <i class="bi bi-windows"></i>
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const taglines = [
    "Pengembang Independen dari Proyek FTs. Berfokus pada pengembangan Frontend yang modern dan kolaboratif.",
    "Buat UI/UX Hebat. Kembangkan aplikasi dengan kecepatan cahaya.",
    "Solusi Responsif untuk semua perangkat. Tanpa Batasan!"
];
const currentTaglineIndex = ref(0);
const currentTagline = ref(taglines[0]);
let taglineInterval;

const startTaglineRotation = () => {
    taglineInterval = setInterval(() => {
        currentTaglineIndex.value = (currentTaglineIndex.value + 1) % taglines.length;
        currentTagline.value = taglines[currentTaglineIndex.value];
    }, 4000); // Ganti setiap 4 detik
};


// V2: Efek Parallax Ringan pada Scroll
const heroSection = ref(null);
const heroVisual = ref(null);

const handleScrollParallax = () => {
    if (heroSection.value && heroVisual.value) {
        // Mendapatkan posisi scroll dari atas halaman
        const scrollY = window.scrollY;
        
        // Menghitung pergerakan visual (misalnya 10% dari scroll)
        const visualMove = scrollY * 0.1;
        
        // Mengubah posisi visual (hanya Y axis) melalui style.transform
        // Ini adalah murni JavaScript yang memanipulasi DOM Style
        heroVisual.value.style.transform = `translateY(${visualMove}px)`;
        
        // Opsional: Buat teks bergerak sedikit ke bawah
        if (heroVisual.value.previousElementSibling) {
             heroVisual.value.previousElementSibling.style.transform = `translateY(${visualMove * 0.05}px)`;
        }
    }
};

onMounted(() => {
    startTaglineRotation();
    window.addEventListener('scroll', handleScrollParallax);
});

onUnmounted(() => {
    clearInterval(taglineInterval);
    window.removeEventListener('scroll', handleScrollParallax);
});


// V3: Tombol yang Berubah Warna Acak Saat Hover
const ctaButton = ref(null);
let originalBackgroundColor = 'initial'; // Akan diinisialisasi saat mounted

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 1)];
    }
    return color;
};

const changeCtaColor = () => {
    if (ctaButton.value) {
        // Simpan warna asli sebelum diubah
        if (originalBackgroundColor === 'initial') {
            originalBackgroundColor = window.getComputedStyle(ctaButton.value).backgroundColor;
        }
        
        // Set warna acak (hanya background)
        ctaButton.value.style.backgroundColor = getRandomColor();
        // Opsional: Buat transisi halus agar tidak 'shocking' (tanpa CSS tambahan)
        ctaButton.value.style.transition = 'background-color 0.1s ease-out';
    }
};

const resetCtaColor = () => {
    if (ctaButton.value) {
        // Kembalikan ke warna asli yang didapatkan dari CSS
        ctaButton.value.style.backgroundColor = originalBackgroundColor;
        // Kembalikan transisi ke nilai yang lebih panjang (atau hapus)
        ctaButton.value.style.transition = 'background-color 0.3s ease-in';
    }
};

</script>

<style scoped>
/*
    CATATAN: CSS yang Anda berikan sebelumnya TIDAK BOLEH DIUBAH!
    Ini adalah asumsi gaya CSS dasar yang mungkin sudah ada,
    agar interaksi JS bisa bekerja:
*/
.hero-section {
    padding: 100px 0;
    min-height: 500px;
    background-color: #f5f5f5; /* Asumsi latar belakang */
}

.container {
    display: flex;
    gap: 40px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.hero-content {
    flex: 1;
}

.hero-visual {
    flex: 1;
    transition: transform 0.1s ease-out; 
}

h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.tagline {
    font-size: 1.2em;
    margin-bottom: 30px;
    transition: opacity 0.5s ease-in-out;
}

.btn-primary {
    padding: 12px 25px;
    border-radius: 6px;
    background-color: blue;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease; 
}

.bi {
    margin-left: 8px;
}
</style>