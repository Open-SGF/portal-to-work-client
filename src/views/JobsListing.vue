<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Jobs Near Me</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding-vertical" :fullscreen="true">
            <SearchBar>
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
            </SearchBar>
        </ion-content>
    </ion-page>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import Map from '../components/Map.vue';

export default {
    name: 'JobListing',
    components: {
        SearchBar,
        Map,
    },
    methods: {
        mapClick(location) {
            console.log(location);
        },
    },
};
</script>
<style scoped>
.job-listing-map {
    height: 200px;
    margin: 34px 0;
}
</style>
