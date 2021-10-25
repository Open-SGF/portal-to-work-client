import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue';
import LandingPage from '../views/LandingPage.vue';

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
    {
        path: '/',
        component: LandingPage,
        children: [
            {
                path: 'landing',
                component: () => import('../views/LandingPage.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
