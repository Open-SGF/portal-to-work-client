<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Jobs Near Me</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding-vertical" :fullscreen="true">
            <ais-instant-search :search-client="searchClient" index-name="test_portal-to-work">
                <ais-search-box />
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
                <ais-hits>
                    <template v-slot:item="{ item }">
                        <JobItem
                            :key="item.number"
                            :number="item.number"
                            :title="item.title"
                            :description="item.description"
                        >
                        </JobItem>
                    </template>
                </ais-hits>
            </ais-instant-search>
        </ion-content>
    </ion-page>
</template>

<script>
import JobItem from '../components/JobItem.vue';
import Map from '../components/Map.vue';
import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY } from '../config';

export default {
    name: 'JobListing',
    components: {
        JobItem,
        Map,
    },
    data() {
        return {
            searchClient: algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY),
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
        mapClick(location) {
            console.log(location);
        },

        captureHits(hits) {
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

            this.mapPins = new Array();
            this.mapPins = [...mapPins];
            this.jobItems = [];
            this.jobItems = [...jobItems];
        },
    },
};
</script>
<style scoped>
.job-listing-map {
    height: 200px;
}
</style>
