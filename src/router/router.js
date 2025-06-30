import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/movie/:id',
        name: 'movie detail',
        component: () => import('../views/FilmDetailes.vue'),
        props: true
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component: () => import('../views/FilmsFavoritos.vue'),
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;