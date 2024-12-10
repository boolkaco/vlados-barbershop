import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router';
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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash);
                    if (element) {
                        const offset = window.innerWidth > 600 && to.hash === '#about_us' ? 100 : 50;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                        });
                    }
                    resolve({});
                }, 100);
            });
        } else {
            return {top: 0};
        }
    },
});

