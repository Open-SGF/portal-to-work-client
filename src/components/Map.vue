<template>
    <div ref="map" class="map"></div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_API_KEY } from '../config';
import mapStyles from '../utils/map-styles.json';

const MAX_DEFAULT_ZOOM = 15;

const loader = new Loader({
    apiKey: GOOGLE_MAPS_API_KEY,
    version: 'weekly',
});

export default {
    google: null,
    map: null,
    markers: [],
    isMounted: false,
    isMapReady: false,
    props: {
        locations: {
            type: Array,
            default: () => [],
        },
    },
    created() {
        loader.load().then((google) => {
            this.$options.google = google;
            this.initMap();
        });
    },
    mounted() {
        // Sometimes JS will report that the map has a height and width of 0 instead of
        // the actual dimensions. This might be caused by CSS loading issues. So for now
        // We wait until JS reports on actual width/height before continuing
        this.waitForMapSize(() => {
            this.$options.isMounted = true;
            this.initMap();
        });
    },
    methods: {
        initMap() {
            const { google, map, isMounted } = this.$options;

            if (google === null || map !== null || !isMounted) {
                return;
            }

            this.$options.map = new google.maps.Map(this.$refs.map, {
                styles: mapStyles,
                disableDefaultUI: true,
            });

            google.maps.event.addListenerOnce(this.$options.map, 'idle', () => {
                this.$options.isMapReady = true;

                this.updateMapMarkers(this.locations);
            });
        },
        updateMapMarkers(locations) {
            const { google, map, isMapReady } = this.$options;

            if (google === null || map === null || !isMapReady) {
                return;
            }

            this.removeAllMarkers();

            const bounds = new google.maps.LatLngBounds();

            for (const location of locations) {
                const marker = new google.maps.Marker({
                    position: { lat: location.latitude, lng: location.longitude },
                    map,
                });

                this.$options.markers.push(marker);

                bounds.extend(marker.getPosition());
            }

            map.fitBounds(bounds);

            google.maps.event.addListenerOnce(map, 'idle', () => {
                if (map.getZoom() > MAX_DEFAULT_ZOOM) {
                    map.setZoom(MAX_DEFAULT_ZOOM);
                }
            });
        },
        removeAllMarkers() {
            for (const marker of this.$options.markers) {
                marker.setMap(null);
            }

            this.$options.markers = [];
        },
        waitForMapSize(fn) {
            const height = this.$refs.map.offsetHeight;

            if (height > 0) {
                fn();
                return;
            }

            setTimeout(() => {
                this.waitForMapSize(fn);
            }, 5);
        },
    },
    watch: {
        locations(newLocations, oldLocations) {
            this.updateMapMarkers(newLocations);
        },
    },
};
</script>

<style scoped>
.map {
    width: 100%;
    min-height: 100px;
}
</style>
