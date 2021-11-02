<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/jobs/filters" color="light"></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-center">Edit Location</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <EditUserLocationForm />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonButtons, IonBackButton } from '@ionic/vue';
import EditUserLocationForm from '../components/EditUserLocationForm.vue';

export default {
    name: 'EditUserLocation',
    components: {
        IonButtons,
        IonBackButton,
        EditUserLocationForm,
    },
};
</script>
