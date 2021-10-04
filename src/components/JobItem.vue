<template>
    <ion-item>
        <ion-note slot="start">{{ this.number }}</ion-note>
        <ion-item-group>
            <ion-label>Patient Transporter</ion-label>
            <ion-note>Test</ion-note>
        </ion-item-group>
        <ion-button fill="clear" shape="round" slot="end" @click="$emit('favorite-tapped')">
            <ion-icon
                slot="end"
                :icon="isFavorite ? heart : heartOutline"
                color="primary"
            ></ion-icon>
        </ion-button>
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
        number: Number,
        title: String,
        description: String,
        isFavorite: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['favorite-tapped'],
    data() {
        return {
            heartOutline,
            heart,
        };
    },
};
</script>
