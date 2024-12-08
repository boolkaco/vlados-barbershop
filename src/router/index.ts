import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/:lang(en|ua|cz|ru)?',
        name: 'home',
        component: HomeView,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
