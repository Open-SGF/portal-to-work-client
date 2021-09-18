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
                        <ion-button size="small">{{ detailsObj.buttonText }}</ion-button>
                    </ion-col>
                </ion-row>
                <ion-row>{{ detailsObj.address }}</ion-row>
                <div class="hr"></div>

                <div class="div" v-for="(property, index) in detailsObj.properties" :key="index">
                    <ion-row class="ion-align-items-center">
                        <ion-col>
                            <p class="ion-no-margin">{{ property.key }}</p>
                        </ion-col>
                        <ion-col size="auto">
                            <p class="ion-no-margin">{{ property.value }}</p>
                        </ion-col>
                    </ion-row>
                    <div class="hr"></div>
                </div>

                <ion-row>
                    <p>{{ detailsObj.details }}</p>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
} from '@ionic/vue';

export default {
    name: 'Details',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonGrid,
        IonCol,
        IonRow,
        IonButton,
    },
    props: {
        name: String,
        // detailsObj: detailsObj,
    },
    data() {
        return {
            detailsObj: {
                title: 'title',
                company: 'company',
                address: 'address',
                buttonText: 'Click Me',
                properties: [
                    {
                        key: 'property one',
                        value: 'property one details',
                    },
                    {
                        key: 'property two',
                        value: 'property two details',
                    },
                    {
                        key: 'property three',
                        value: 'property three details',
                    },
                ],
                details: `Subject for catalogue: file under 'imagination, comma, lack of'. I don't
                    suppose we'll ever know if we actually succeeded. But at worst, we failed doing
                    the right thing, as opposed to succeeding in doing the wrong. I am totally
                    against bantering. The waves of time wash us all clean. Are you listening to
                    me? A little gratitude wouldn't irretrievably damage my ego. Hello-o-o-o.
                    Life depends on change and renewal. I hate computers and refuse to be
                    bullied by them. Yes, well, it's a brilliant noise. I love that noise.`,
            },
        };
    },
};
</script>
<style scoped></style>
