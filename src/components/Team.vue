<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { teamMembers } from "@/mock-data.js";

const props = defineProps({
  showAll: { type: Boolean, default: false }
});

// tampilkan semua anggota kalau showAll = true, kalau nggak cuma 6
const limit = ref(props.showAll ? teamMembers.length : 6);

const visibleTeam = computed(() => teamMembers.slice(0, limit.value));

const router = useRouter();
const goToFullTeam = () => router.push("/team");
</script>


<template>
<section class="profile-cards" id="profiles">
    <div class="container">
        <h1 class="text-center mb-5 fw-bold">
            <span style="color: #17e9bfff;">Tim</span>Kami
        </h1>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div 
              class="col" 
              v-for="(member, index) in visibleTeam" 
              :key="index"
            >
                <div class="card h-100 shadow-sm">
                    
                    <img 
                        :src="member.photo" 
                        class="card-img-top mx-auto mt-3 rounded-circle" 
                        alt="Foto Profil" 
                        style="width: 100px; height: 100px;"
                    >

                    <div class="card-body text-center">
                        <h5 class="card-title">{{ member.name }}</h5>
                        <p class="card-text text-muted">{{ member.role }}</p>

                        <a 
                            :href="member.portfolio" 
                            class="btn btn-sm btn-outline-primary mb-2 d-block"
                            target="_blank"
                        >
                            Lihat Portofolio
                        </a>

                        <a 
                            :href="member.github" 
                            class="btn btn-sm btn-dark d-block"
                            target="_blank"
                        >
                            GitHub <i class="fa-brands fa-github"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <!-- View More di kanan bawah -->
        <div class="mt-4 text-end" v-if="limit < teamMembers.length">
            <span 
                style="cursor: pointer; color: #0d6efd; font-weight: 500;"
                @click="goToFullTeam"
            >
                View More Team →
            </span>
        </div>
    </div>
</section>
</template>

<style scoped>
text-team {
    color: #fd2424ff;
    background-color: red;
}
</style>
