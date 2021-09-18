<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Alerts</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Alerts</ion-title>
                </ion-toolbar>
            </ion-header>

            <ExploreContainer name="Alerts page" />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
    name: 'Tab2',
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
