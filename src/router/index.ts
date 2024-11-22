import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/pages/home/index.vue')
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/pages/404/index.vue')
	},
	{
		path: '/:catchAll(.*)', // 使用带有正则表达式的参数
		name: 'catch-all',
		redirect: '/404'
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
