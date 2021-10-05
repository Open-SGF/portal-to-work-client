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
import { IonSearchbar, IonFabButton, IonIcon, IonList } from '@ionic/vue';
import { filterOutline } from 'ionicons/icons';
import JobItem from '../components/JobItem.vue';

export default {
    name: 'JobListing',
    components: {
        IonSearchbar,
        IonFabButton,
        IonIcon,
        IonList,
        JobItem,
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
