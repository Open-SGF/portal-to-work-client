<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Details</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-grid class="ion-padding-horizontal">
                <ion-row>
                    <img src="https://via.placeholder.com/350x150" />
                </ion-row>
                <ion-row class="ion-justify-content-end ion-padding-bottom">
                    <a id="maps-link" href="maps.google.com">VIEW ON MAPS</a>
                </ion-row>
                <ion-row class="ion-align-items-center">
                    <ion-col>
                        <h2 class="ion-no-margin">{{ detailsObj.title }}</h2>
                        <p class="ion-no-margin">{{ detailsObj.company }}</p>
                    </ion-col>
                    <ion-col size="auto">
                        <ion-button :href="detailsObj.button.link" size="small">{{
                            detailsObj.button.text
                        }}</ion-button>
                    </ion-col>
                </ion-row>
                <ion-row class="detail-row">{{ detailsObj.address }}</ion-row>
                <div class="hr"></div>

                <div class="div" v-for="(property, index) in detailsObj.properties" :key="index">
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
                    <p>{{ detailsObj.details }}</p>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';

export default {
    name: 'Details',
    components: {
        IonGrid,
        IonCol,
        IonRow,
        IonButton,
    },
    props: {
        name: String,
        heavenlyDetailsObj: Object,
    },
    data() {
        return {
            detailsObj: this.heavenlyDetailsObj,
        };
    },
};
</script>
<style scoped>
ion-grid {
    padding: 30px;
}

.detail-row {
    margin-top: 30px;
}

.paragraph-wrapper {
    padding: 10px;
}
</style>
