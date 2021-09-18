<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="jobs" href="/jobs">
                    <ion-icon :icon="triangle" />
                    <ion-label>Jobs</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="alerts" href="/alerts">
                    <ion-icon :icon="ellipse" />
                    <ion-label>Alerts</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="events" href="/events">
                    <ion-icon :icon="square" />
                    <ion-label>Events</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
} from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
    name: 'Tabs',
    components: {
        IonLabel,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonPage,
        IonRouterOutlet,
    },
    setup() {
        return {
            ellipse,
            square,
            triangle,
        };
    },
};
</script>
