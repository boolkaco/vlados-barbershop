import './scss/app.scss';
import { createPinia } from 'pinia';
import { ViteSSG } from 'vite-ssg';
import { i18n } from './locale';
import App from './App.vue';
import { routes } from './router';

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, initialState }) => {
        const pinia = createPinia();
        app.use(pinia);
        app.use(i18n);

        if (import.meta.env.SSR) initialState.pinia = pinia.state.value;
        else pinia.state.value = initialState.pinia || {};

        const allowedLangs = ['cz', 'en', 'ua', 'ru'] as const;
        type LangType = typeof allowedLangs[number];

        router.beforeEach((to, from, next) => {
            const lang = (to.params.lang as string) || 'cz';
            const { locale } = i18n.global;

            if (!to.params.lang) {
                next({ path: `/${lang}${to.fullPath}` });
            } else if (allowedLangs.includes(lang as LangType)) {
                locale.value = lang as LangType;
                next();
            } else {
                next();
            }
        });
    }
);
