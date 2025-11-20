<template>
<header class="navbar-header">
    <div class="logo-container">
        <img src="/nlfts.png" alt="NLFTs Icon" class="logo-icon">
        <div class="logo-text">NLFTs</div>
    </div>
    
    <nav class="nav-links" id="navMenu">
        <ul>
            <li><a href="#docs" class="nav-item">Docs</a></li>
            <li><a href="#myfts" class="nav-item">Team</a></li>
            </ul>
    </nav>
    
    <button class="burger-menu" id="burgerBtn" aria-label="Toggle navigation">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </button>
</header>
</template>

<script setup>
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    burgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });
    
    // Opsional: Tutup menu saat link di klik (khusus mobile)
    document.querySelectorAll('.nav-links a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                burgerBtn.classList.remove('active');
            }
        });
    });
});
</script>



<style scoped>
/* Reset Dasar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; /* Font yang lebih clean dan modern */
}

:root {
    --primary-color: #1abc9c17; /* Hijau mint yang cerah dan friendly */
    --secondary-color: #34495e; /* Abu-abu gelap untuk kontras */
    --light-bg: #ecf0f1; /* Latar belakang yang sangat terang */
    --dark-text: #2c3e50; /* Teks gelap */
    --transition-time: 0.25s;
}

/* Header/Navbar - Lebih Bersih */
.navbar-header {
    background-color: #1abc9c; /* Latar belakang putih bersih */
    border-bottom: 1px solid #e0e0e0; /* Garis bawah tipis */
    color: var(--dark-text);
    padding: 18px 40px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05); /* Shadow sangat tipis */
    z-index: 1000;
    position: sticky;
    top: 0;
}

/* Logo di Kiri (Icon + Text) */
.logo-container {
    display: flex;
    align-items: center;
    gap: 12px; 
}

.logo-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%; /* Bentuk bulat */
    box-shadow: 0 0 10px rgba(26, 188, 156, 0.5); /* Shadow lembut warna primary */
}

.logo-text {
    font-size: 1.7em;
    font-weight: 800; /* Lebih tebal */
    letter-spacing: -0.5px; /* Lebih rapat */
    color: var(--dark-text); 
}

/* Navigasi Links */
.nav-links ul {
    list-style: none;
    display: flex;
    align-items: center;
}

.nav-links li {
    margin: 0 20px; 
}

/* Gaya Link Item Navigasi */
.nav-links li .nav-item {
    color: white;
    text-decoration: none;
    padding: 5px 0;
    display: block;
    position: relative;
    font-weight: 600;
    font-size: 1.05em;
    transition: color var(--transition-time) ease;
}

.nav-links li .nav-item:hover {
    color: var(--primary-color); /* Berubah ke hijau mint saat hover */
}

/* Efek Modern: Garis Bawah (Underline) Minimalis */
.nav-links li .nav-item::after {
    content: '';
    position: absolute;
    bottom: -8px; 
    left: 50%; /* Mulai dari tengah */
    transform: translateX(-50%);
    width: 0; 
    height: 3px;
    background-color: var(--primary-color);
    border-radius: 1.5px;
    transition: width var(--transition-time) cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Kurva transisi yang halus */
}

.nav-links li .nav-item:hover::after {
    width: 100%; /* Lebar penuh saat hover, terlihat dari tengah */
}

/* Tombol Burger Menu */
.burger-menu {
    display: none; 
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    z-index: 1001;
}

.burger-menu .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 4px auto;
    background-color: var(--dark-text); /* Warna burger menu gelap */
    transition: all var(--transition-time) ease-in-out;
    border-radius: 1px;
}

/* Efek Animasi X pada Burger Menu */
.burger-menu.active .bar:nth-child(2) {
    opacity: 0;
}

.burger-menu.active .bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.burger-menu.active .bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}


/* Responsif untuk Mobile */
@media (max-width: 768px) {
    
    .navbar-header {
        padding: 15px 20px;
    }

    .burger-menu {
        display: block;
    }

    .nav-links {
        position: fixed; 
        top: 65px; /* Sesuaikan dengan tinggi header */
        left: 0;
        width: 100%;
        height: 0; 
        background-color: white; /* Latar belakang menu mobile putih */
        overflow: hidden;
        transition: height var(--transition-time) ease-in-out;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }

    .nav-links.active {
        height: 150px; /* Cukup tinggi untuk 2 item menu */
    }

    .nav-links ul {
        flex-direction: column; 
        padding: 10px 0;
    }
    
    .nav-links li {
        margin: 0;
        width: 100%;
    }

    .nav-links li a {
        padding: 12px 0;
        border-bottom: 1px solid #f0f0f0; /* Garis pemisah sangat tipis */
        text-align: center;
        width: 100%;
    }
    
    .nav-links li:last-child a {
        border-bottom: none;
    }

    /* Hilangkan efek garis di mobile agar menu lebih bersih */
    .nav-links li .nav-item::after {
        display: none;
    }
}
</style>