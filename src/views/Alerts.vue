<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title class="ion-text-center">Alerts</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-list>
                <AlertListingItem
                    alert="Alert 1"
                    alertLocation="Location 1"
                    whenPosted="one hour ago"
                />
                <AlertListingItem
                    alert="Alert 2"
                    alertLocation="Location 2"
                    whenPosted="three hours ago"
                />
                <AlertListingItem
                    alert="Alert 3"
                    alertLocation="Location 3"
                    whenPosted="five days ago"
                    :date="new Date()"
                />
            </ion-list>
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Alerts</ion-title>
                </ion-toolbar>
            </ion-header>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import AlertListingItem from '../components/AlertListingItem.vue';

export default {
    name: 'Alerts',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonList,
        AlertListingItem,
    },
};
</script>
