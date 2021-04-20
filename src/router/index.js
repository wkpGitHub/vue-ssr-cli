/*
 * @Author: 王康平
 * @后端开发: 
 * @Date: 2019-05-12 00:28:08
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            {
                path: '/home', component: () => import('../views/home.vue'),
            },
            {
                path: '/z/', component: () => import('../views/sports/index.vue'),
                children: [
                    {
                        path: '/', component: () => import('../views/sports/home/Page.vue'),
                    }
                ]
            }
        ]
    });
}