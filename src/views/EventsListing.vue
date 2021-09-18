<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Events</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-list v-on:click="foo()">
                <EventListingItem />
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import EventListingItem from '../components/EventListingItem.vue';

export default {
    name: 'EventListing',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonList,
        EventListingItem,
    },
    methods: {
        foo() {
            console.log('hi mum');
        },
    },
};
</script>
