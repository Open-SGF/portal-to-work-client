<template>
    <div class="ion-text-center edit-address">
        <div class="address-content">
            <div class="top-text">
                <ion-text color="tertiary">
                    Find jobs near you, using your current location or current address.
                </ion-text>
            </div>
            <ion-button color="tertiary" class="use-location" @click="getBrowserLocation()"
                >Use Current Location</ion-button
            >
            <hr />
            <div class="ion-text-left">
                <ion-note>Street Address</ion-note>
                <ion-searchbar class="address-line"></ion-searchbar>
            </div>
            <Map class="map" :locations="mapLocations"></Map>
            <ion-button>Continue</ion-button>
        </div>
    </div>
</template>

<script>
import { IonText, IonButton, IonNote, IonSearchbar } from '@ionic/vue';
import Map from './Map.vue';

export default {
    name: 'EditUserLocationForm',
    components: {
        IonText,
        IonButton,
        IonNote,
        IonSearchbar,
        Map,
    },
    data() {
        return {
            currentLocation: null,
        };
    },
    computed: {
        mapLocations() {
            if (!this.currentLocation) {
                return [];
            }

            return [this.currentLocation];
        },
    },
    methods: {
        getBrowserLocation() {
            if (!navigator.geolocation) {
                return;
            }

            navigator.geolocation.getCurrentPosition(this.onGetPosition, this.onGetPositionError, {
                enableHighAccuracy: true,
            });
        },
        onGetPosition(position) {
            this.currentLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };
        },
        onGetPositionError(error) {
            console.log(error);
        },
    },
};
</script>

<style>
.edit-address {
    /*min-height: calc(100vh - 57px);*/
}

.address-content {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    height: 100%;
    flex: 1 0 auto;
    padding: 50px 0;
    width: 90%;
    margin: 0 auto;
}

.use-location {
    --ion-color-tertiary-contrast: true;
}

hr {
    background-color: black;
    width: 250px;
}

.address-line {
    height: 48px;
}

.map {
    height: 200px;
}
</style>
