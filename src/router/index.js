import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/login/index.vue";
import Home from "@/pages/home/index.vue";
import P404 from "@/pages/404/index.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/404',
        name: '404',
        component: P404,
    },
    {
        path: '/:catchAll(.*)', // 使用带有正则表达式的参数
        name: 'catch-all',
        beforeEnter: (to) => {
            return { name: '404' }; // 重定向到 404 页面
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // 检查用户是否登录
    if (document.cookie) {
        next()
    } else {
        // 如果用户未登录，则重定向到登录页面
        if (to.name !== 'login') {
            next({ name: 'login' });
        } else {
            next();
        }
    }
});

export default router;
