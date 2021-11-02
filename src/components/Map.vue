<template>
    <div ref="map" class="map"></div>
</template>

<script>
import { throttle } from 'throttle-debounce';
import { Loader } from '@googlemaps/js-api-loader';

import { GOOGLE_MAPS_API_KEY } from '../config';
import mapStyles from '../utils/map-styles.json';

const MAX_DEFAULT_ZOOM = 15;

const loader = new Loader({
    apiKey: GOOGLE_MAPS_API_KEY,
    version: 'weekly',
});

export default {
    props: {
        locations: {
            type: Array,
            default: () => [],
        },
    },
    emits: {
        locationClick: null,
    },
    google: null,
    map: null,
    markers: [],
    isMounted: false,
    onWindowResizeThrottled: () => {},
    created() {
        this.$options.onWindowResizeThrottled = throttle(200, this.onWindowResize);

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

        window.addEventListener('resize', this.$options.onWindowResizeThrottled);
    },
    unmounted() {
        window.removeEventListener('resize', this.$options.onWindowResizeThrottled);
    },
    methods: {
        initMap() {
            const { google, map, isMounted } = this.$options;

            if (google === null || map !== null || !isMounted) {
                return;
            }

            this.$options.map = new google.maps.Map(this.$refs.map, {
                center: { lat: 37.209, lng: -93.2923 },
                zoom: 9,
                styles: mapStyles,
                disableDefaultUI: true,
            });

            this.updateMapMarkers(this.locations);
        },
        updateMapMarkers(locations = []) {
            const { google, map } = this.$options;

            if (google === null || map === null) {
                return;
            }

            this.removeAllMarkers();

            if (locations.length <= 0) {
                return;
            }

            const bounds = new google.maps.LatLngBounds();

            for (const location of locations) {
                const marker = new google.maps.Marker({
                    position: { lat: location.latitude, lng: location.longitude },
                    map,
                });

                marker.addListener('click', () => {
                    this.onMarkerClick(location);
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
                google.maps.event.clearListeners(marker, 'click');
                marker.setMap(null);
            }

            this.$options.markers = [];
        },
        waitForMapSize(callback) {
            const height = this.$refs.map.offsetHeight;

            if (height > 0) {
                callback();
                return;
            }

            setTimeout(() => {
                this.waitForMapSize(callback);
            }, 5);
        },
        onMarkerClick(location) {
            this.$emit('locationClick', location);
        },
        onWindowResize() {
            const { markers, map } = this.$options;

            if (map === null || markers.length <= 0) {
                return;
            }

            const bounds = new google.maps.LatLngBounds();

            for (const marker of this.$options.markers) {
                bounds.extend(marker.getPosition());
            }

            map.fitBounds(bounds);
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
