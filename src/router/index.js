import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue';

const routes = [
    {
        path: '/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: '/jobs',
            },
            {
                path: 'jobs',
                component: () => import('../views/JobsListing.vue'),
            },
            {
                path: 'alerts',
                component: () => import('../views/Alerts.vue'),
            },
            {
                path: 'events',
                component: () => import('../views/EventsListing.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
