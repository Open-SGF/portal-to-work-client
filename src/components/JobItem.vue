<template>
    <ion-item>
        <ion-note slot="start">{{ number + 1 }}</ion-note>
        <ion-item-group>
            <ion-label>{{ title }}</ion-label>
            <ion-note class="description">{{ description }}</ion-note>
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
import { IonLabel, IonNote, IonItemGroup, IonButton } from '@ionic/vue';
import { heartOutline, heart } from 'ionicons/icons';
export default {
    name: 'JobItem',
    components: {
        IonLabel,
        IonNote,
        IonItemGroup,
        IonButton,
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

<style scoped>
.description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
}
</style>
