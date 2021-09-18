<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Jobs</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Jobs</ion-title>
                </ion-toolbar>
            </ion-header>

            <ExploreContainer name="Jobs page" />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
    name: 'JobListing',
    components: {
        ExploreContainer,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
    },
};
</script>
