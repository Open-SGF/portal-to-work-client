<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button :default-href="backButtonHref" color="light"></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-center">{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-grid class="ion-padding-horizontal content">
                <ion-row>
                    <Map
                        class="details-map"
                        :locations="[{ latitude: 37.212059, longitude: -93.290154 }]"
                    ></Map>
                </ion-row>
                <ion-row class="ion-justify-content-end ion-padding-bottom">
                    <a class="maps-link" href="maps.google.com">VIEW ON MAPS</a>
                </ion-row>
                <ion-row class="ion-align-items-center">
                    <ion-col>
                        <h2 class="ion-no-margin">{{ title }}</h2>
                        <p class="ion-no-margin">{{ company }}</p>
                    </ion-col>
                    <ion-col size="auto">
                        <ion-button :href="button.link" size="small">{{ button.text }}</ion-button>
                    </ion-col>
                </ion-row>
                <ion-row class="detail-row">{{ address }}</ion-row>
                <div class="hr"></div>

                <div class="div" v-for="(property, index) in properties" :key="index">
                    <ion-row class="detail-row ion-align-items-center">
                        <ion-col>
                            <p class="ion-no-margin">{{ property.key }}</p>
                        </ion-col>
                        <ion-col size="auto">
                            <p class="ion-no-margin">{{ property.value }}</p>
                        </ion-col>
                    </ion-row>
                    <div class="hr"></div>
                </div>

                <ion-row class="paragraph-wrapper">
                    <p>{{ details }}</p>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonButton, IonButtons, IonBackButton } from '@ionic/vue';
import Map from './Map.vue';

export default {
    name: 'Details',
    components: {
        IonButton,
        IonButtons,
        IonBackButton,
        Map,
    },
    props: {
        name: String,
        pageTitle: String,
        title: String,
        company: String,
        button: Object,
        address: String,
        properties: Object,
        details: String,
        backButtonHref: String,
    },
};
</script>
<style scoped>
.content {
    padding: 30px;
}
.detail-row {
    margin-top: 30px;
}

.paragraph-wrapper {
    padding: 10px;
}

.details-map {
    height: 150px;
}

.maps-link {
    margin-top: 10px;
}
</style>
