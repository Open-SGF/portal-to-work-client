<template>
    <ion-item class="list-item">
        <ion-item-group>
            <ion-label class="title">{{ title }}</ion-label>
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
.list-item {
    padding-top: 13px;
}

.title {
    font-weight: bold;
    font-size: 14px;
    color: #555555;
    letter-spacing: 0;
    line-height: 17px;
}

.description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;

    padding-bottom: 19px;

    font-family: Arial;
    font-size: 12px;
    color: #555555;
    letter-spacing: 0;
    line-height: 14px;
}
</style>
