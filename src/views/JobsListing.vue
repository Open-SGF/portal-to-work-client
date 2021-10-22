<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Jobs Near Me</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding-vertical" :fullscreen="true">
            <div class="search-bar ion-padding-horizontal">
                <ion-searchbar class="search"></ion-searchbar>
                <ion-fab-button class="ion-padding" router-link="/jobs/filters">
                    <ion-icon :icon="filterOutline"></ion-icon>
                </ion-fab-button>
            </div>
            <div class="ion-padding-horizontal">
                <Map
                    class="job-listing-map"
                    :locations="[
                        { latitude: -34.397, longitude: 150.644 },
                        { latitude: -33.397, longitude: 152.644 },
                    ]"
                    @location-click="mapClick($event)"
                ></Map>
            </div>
            <!-- The map element -->
            <!-- <GoogleMaps></GoogleMaps> -->
            <ion-list class="ion-padding-horizontal">
                <JobItem
                    v-for="(item, index) in jobItems"
                    :key="index"
                    v-on:favorite-tapped="toggleFavorite"
                    :isFavorite="favorite"
                    :number="item.number"
                    :title="item.title"
                    :description="item.description"
                >
                </JobItem>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonSearchbar, IonFabButton } from '@ionic/vue';
import { filterOutline } from 'ionicons/icons';
import JobItem from '../components/JobItem.vue';
import Map from '../components/Map.vue';

export default {
    name: 'JobListing',
    components: {
        IonSearchbar,
        IonFabButton,
        JobItem,
        Map,
    },
    data() {
        return {
            filterOutline,
            favorite: false,
            jobItems: [
                {
                    number: 1,
                    title: 'job 1',
                    description: 'lorem ipsum',
                },
                {
                    number: 2,
                    title: 'job 2',
                    description: 'lorem ipsum',
                },
                {
                    number: 3,
                    title: 'job 3',
                    description: 'lorem ipsum',
                },
            ],
        };
    },
    methods: {
        toggleFavorite() {
            this.favorite = !this.favorite;
        },
        mapClick(location) {
            console.log(location);
        },
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

.job-listing-map {
    height: 200px;
}
</style>
