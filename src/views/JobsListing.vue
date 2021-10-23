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
                    v-on:favorite-tapped="toggleFavorite(this.jobItems[index])"
                    :isFavorite="this.jobItems[index].favorite"
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
import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '../config';

// This bit of code will push data up to the Algolio Database
// fetch('https://alg.li/doc-saas.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (contacts) {
//         return index.saveObjects(contacts, {
//             autoGenerateObjectIDIfNotExist: true,
//         });
//     });

export default {
    name: 'JobListing',
    components: {
        JobItem,
        Map,
        SearchBar,
    },
    data() {
        return {
            searchValue: '',
            jobItems: [
                {
                    number: 1,
                    title: 'job 1',
                    description: 'lorem ipsum',
                    favorite: false,
                },
                {
                    number: 2,
                    title: 'job 2',
                    description: 'lorem ipsum',
                    favorite: false,
                },
                {
                    number: 3,
                    title: 'job 3',
                    description: 'lorem ipsum',
                    favorite: false,
                },
            ],
        };
    },
    methods: {
        toggleFavorite(key) {
            key.favorite = !key.favorite;
            console.log('favorite toggled');
        },

        async queryAlgolia(queryString) {
            const client = await algoliasearch('V51KY9JOFU', '072f0091efa41ec8280ecbf799c7648e');
            const index = client.initIndex('test_portalToWork');
            await index
                .search(queryString, {
                    hitsPerPage: 20,
                    page: 0,
                })
                .then(({ hits }) => {
                    console.log(hits);
                });
        },

        async handleChange(payload) {
            this.searchValue = payload;
            console.log(this.searchValue);
            await this.queryAlgolia(this.searchValue);
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
