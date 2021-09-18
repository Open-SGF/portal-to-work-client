<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/jobs" color="light"></ion-back-button>
                </ion-buttons>
                <ion-title>Job Filters</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true"> </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonButtons,
    IonBackButton,
} from '@ionic/vue';
export default {
    name: 'JobFilters',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonContent,
        IonButtons,
        IonBackButton,
        IonTitle,
    },
};
</script>
