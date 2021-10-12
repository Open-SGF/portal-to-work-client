<template>
    <div ref="map" id="map"></div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_API_KEY } from '../config';
import mapStyles from '../utils/map-styles.json';

const loader = new Loader({
    apiKey: GOOGLE_MAPS_API_KEY,
    version: 'weekly',
});

export default {
    google: null,
    map: null,
    props: {
        locations: {
            type: Array,
            default: () => [],
        },
    },
    mounted() {
        loader.load().then((google) => {
            this.$options.google = google;

            this.$options.map = new this.$options.google.maps.Map(this.$refs.map, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
                styles: mapStyles,
            });

            this.updateMapMarkers();
        });
    },
    methods: {
        updateMapMarkers() {
            const { google, map } = this.$options;

            if (google === null || map === null) {
                return;
            }

            const markers = [];
            const bounds = new google.maps.LatLngBounds();

            for (const location of this.locations) {
                const marker = new google.maps.Marker({
                    position: { lat: location.latitude, lng: location.longitude },
                    map,
                });

                markers.push(marker);

                bounds.extend(marker.position);
            }

            map.fitBounds(bounds);
        },
    },
    watch: {
        locations() {
            this.updateMapMarkers();
        },
    },
};
</script>

<style scoped>
#map {
    width: 100%;
    height: 200px;
}
</style>
