<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Jobs Near Me</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding-vertical" :fullscreen="true">
            <SearchBar
                :value="searchValue"
                @handleChange="handleChange($event)"
                @handleClick="handleClick($event)"
            />
            <div class="ion-padding-horizontal">
                <Map
                    class="job-listing-map"
                    :locations="[
                        { latitude: 37.210388, longitude: -93.297256 },
                        { latitude: 37.212388, longitude: -93.287256 },
                    ]"
                    @location-click="mapClick($event)"
                ></Map>
            </div>
            <!-- <div class="ion-padding-horizontal">
                <Map
                    class="job-listing-map"
                    :locations="this.mapPins"
                    @location-click="mapClick($event)"
                ></Map>
            </div> -->
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
// import generateDummyData from '../generateDummyData';

// This bit of code will push data up to the Algolio Database
// const dummyData = generateDummyData();
// await index.saveObjects(dummyData, {
//     autoGenerateObjectIDIfNotExist: true,
// });

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
                    number: 0,
                    title: 'job 1',
                    description: 'lorem ipsum',
                    favorite: false,
                },
                {
                    number: 1,
                    title: 'job 2',
                    description: 'lorem ipsum',
                    favorite: false,
                },
                {
                    number: 2,
                    title: 'job 3',
                    description: 'lorem ipsum',
                    favorite: false,
                },
            ],
            mapPins: [],
        };
    },
    methods: {
        toggleFavorite(key) {
            key.favorite = !key.favorite;
            console.log('favorite toggled');
        },

        async queryAlgolia(queryString) {
            const client = await algoliasearch('', '');
            const index = client.initIndex('test_portal-to-work');

            // const dummyData = generateDummyData();
            // await index.saveObjects(dummyData, {
            //     autoGenerateObjectIDIfNotExist: true,
            // });

            await index
                .search(queryString, {
                    hitsPerPage: 20,
                    page: 0,
                })
                .then(({ hits }) => {
                    console.log(hits);
                    let jobItems = [];
                    let mapPins = [];

                    for (let i = 0; i < hits.length; i++) {
                        let newItem = [];
                        let newPin = [];

                        newItem.number = i;
                        newItem.title = hits[i].title;
                        newItem.description = hits[i].description;
                        newItem.favorite = false;
                        newPin.latitude = hits[i].location.lat;
                        newPin.longitute = hits[i].location.long;

                        jobItems.push(newItem);
                        mapPins.push(newPin);
                    }

                    this.jobItems = [];
                    this.jobItems = [...jobItems];
                    this.mapPins = [];
                    this.mapPins = [...mapPins];
                    console.log(this.jobItems);
                });
        },

        handleChange(payload) {
            this.searchValue = payload;
            console.log(this.searchValue);
        },

        async handleClick(payload) {
            await this.queryAlgolia(this.searchValue);
            console.log('click');
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
