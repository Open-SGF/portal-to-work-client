<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Jobs Near Me</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding-vertical" :fullscreen="true">
            <SearchBar :value="searchValue" @handleChange="handleChange($event)" />
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
import JobItem from '../components/JobItem.vue';
import Map from '../components/Map.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
    name: 'JobListing',
    components: {
        JobItem,
        Map,
        SearchBar,
    },
    data() {
        return {
            favorite: false,
            searchValue: '',
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

        handleChange(payload) {
            this.searchValue = payload;
            console.log(this.searchValue);
        },

        mapClick(location) {
            console.log(location);
        },
    },
};
</script>

<style scoped>
.job-listing-map {
    height: 200px;
}
</style>
