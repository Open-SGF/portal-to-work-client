<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Jobs Near Me</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <!-- search bar -->
            <div class="search-bar ion-padding-horizontal">
                <ion-searchbar class="search"></ion-searchbar>
                <ion-fab-button router-link="/jobs/filters">
                    <ion-icon :icon="filterOutline"></ion-icon>
                </ion-fab-button>
            </div>
            <!-- The map element -->
            <!-- <GoogleMaps></GoogleMaps> -->
            <!-- Search results -->
            <ion-list class="ion-padding-horizontal">
                <JobItem> </JobItem>
                <JobItem> </JobItem>
                <JobItem> </JobItem>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonFabButton,
    IonIcon,
    IonList,
} from '@ionic/vue';
import { filterOutline } from 'ionicons/icons';
import JobItem from '../components/JobItem.vue';

export default {
    name: 'JobListing',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonSearchbar,
        IonFabButton,
        IonIcon,
        IonList,
        JobItem,
    },
    setup() {
        return {
            filterOutline,
        };
    },
};
</script>

<style scoped>
.search-bar {
    width: 100%;
    display: flex;
}

.search {
    width: 100%;
}
</style>
