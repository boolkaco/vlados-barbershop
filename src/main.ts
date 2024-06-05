import './scss/app.scss';
import { createPinia } from 'pinia';
import { ViteSSG } from 'vite-ssg';
import { i18n } from './locale';
import App from './App.vue';
import { router } from './router';
import type { RouteRecordRaw } from 'vue-router';

export const createApp = ViteSSG( 
  App, 
  { routes: router }, 
  ({app, router  , initialState}) => {
    const pinia = createPinia();  
    app.use(pinia);
    app.use(i18n);
    if(import.meta.env.SSR) initialState.pinia = pinia.state.value;
    else pinia.state.value = initialState.pinia || {};
    router.beforeEach((to, from, next) => {
      next();
    });
  }
);

export async function includedRoutes(
  paths: String, 
  routes: RouteRecordRaw[]
) {
  return Promise.all(routes.map(async (route) => {
    return route.path
  }));

}