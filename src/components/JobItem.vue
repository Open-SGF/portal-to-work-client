<template>
    <ion-item>
        <ion-note slot="start">1</ion-note>
        <ion-item-group>
            <ion-label>Patient Transporter</ion-label>
            <ion-note>Test</ion-note>
        </ion-item-group>
        <ion-icon
            slot="end"
            :icon="isFavorite ? heart : heartOutline"
            color="primary"
            @click="$emit('favorite-tapped')"
        ></ion-icon>
    </ion-item>
</template>

<script>
import { IonIcon, IonItem, IonLabel, IonNote, IonItemGroup } from '@ionic/vue';
import { heartOutline, heart } from 'ionicons/icons';
export default {
    name: 'JobItem',
    components: {
        IonItem,
        IonLabel,
        IonIcon,
        IonNote,
        IonItemGroup,
    },
    props: {
        isFavorite: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['favorite-tapped'],
    setup() {
        return {
            heartOutline,
            heart,
        };
    },
};
</script>
