import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import TeamPage from '../pages/TeamPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/team', name: 'Team', component: TeamPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
