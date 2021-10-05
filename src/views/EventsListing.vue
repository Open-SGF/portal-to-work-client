<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Events</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-list v-on:click="() => router.push('/alerts')">
                <EventListingItem title="Event Title" :date="new Date(2020, 11, 25)" />
                <EventListingItem title="Event Title 2" :date="new Date()" />
                <EventListingItem title="Event Title 3" :date="new Date()" />
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { useRouter } from 'vue-router';
import EventListingItem from '../components/EventListingItem.vue';

export default {
    name: 'EventListing',
    components: {
        EventListingItem,
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    data() {
        return {
            events: [
                {
                    title: 'foo',
                    location: 'bar',
                    info: 'stuff',
                    date: 'string',
                },
            ],
        };
    },
    methods: {},
};
</script>
