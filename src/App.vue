<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';

export default {
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
    },
};
</script>

<style>
.hr {
    border-bottom: 1px solid var(--ion-color-dark-tint);
    margin: 10px 0;
    width: 100%;
}
</style>
