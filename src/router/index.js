import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue';

const routes = [
    {
        path: '/landing',
        component: () => import('../views/LandingPage.vue'),
    },
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
                path: 'jobs/filters',
                component: () => import('../views/JobFilters.vue'),
            },
            {
                path: 'alerts',
                component: () => import('../views/Alerts.vue'),
            },
            {
                path: 'events',
                component: () => import('../views/EventsListing.vue'),
            },
            {
                path: 'job-details',
                component: () => import('../views/JobDetails.vue'),
            },
            {
                path: 'event-details',
                component: () => import('../views/EventDetails.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
