import './scss/app.scss'
import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg'
import { i18n } from '../locale/i18n';
import App from './App.vue'
import { router } from './router'
import type { RouteRecordRaw } from 'vue-router'


export const createApp = ViteSSG( 
  App, 
  { routes: router }, 
  ({app, router  , initialState}) => {
    const pinia = createPinia();  
    app.use(pinia);
    app.use(i18n);
    //set values  during build time
    if(import.meta.env.SSR) initialState.pinia = pinia.state.value;
    else pinia.state.value = initialState.pinia || {};

    // all this run during run time
    router.beforeEach((to, from, next) => {
      next();
    });
  }
);

export async function includedRoutes(
  paths: String, 
  routes: RouteRecordRaw[]
) {
  //runs during build time
  return Promise.all(routes.map(async (route) => {
    return route.path
  }));

}