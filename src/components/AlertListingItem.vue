<template>
    <ion-item class="event-listing-item">
        <DateIcon :date="date" v-if="date" />
        <ion-icon class="icon-wrapper" :icon="briefcase" color="primary" v-else />
        <ion-note class="text-wrapper">
            <h4>{{ alert }}</h4>
            <h5>{{ alertLocation }}</h5>
        </ion-note>
        <p class="posted">{{ whenPosted }}</p>
    </ion-item>
</template>

<script>
import { IonItem, IonNote, IonIcon } from '@ionic/vue';
import { briefcase } from 'ionicons/icons';

import DateIcon from './DateIcon.vue';

export default {
    name: 'AlertListingItem',
    components: {
        IonItem,
        IonNote,
        IonIcon,
        DateIcon,
    },
    props: {
        date: Date,
        whenPosted: String,
        alert: String,
        alertLocation: String,
    },
    data() {
        return {
            briefcase,
        };
    },
};
</script>

<style scoped>
.date-wrapper {
    width: 20%;
}

.date {
    background: var(--ion-color-primary);
    color: var(--ion-color-primary-contrast);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8px;
    font-size: 12px;
}

h4 {
    font-size: 20px;
}

h5 {
    font-size: 16px;
}

.posted {
    width: 30%;
    font-size: 11px;
    text-align: right;
}

.month {
    font-size: 11px;
}

/* TODO: make sure all paddings/margins create equal whitespace around elements */
.text-wrapper {
    padding-bottom: 10px;
    width: 50%;
}

.text-wrapper > h4,
.text-wrapper > h5,
.text-wrapper > p {
    padding: 5px 0 0 5px;
    margin: 0 0;
}

ion-icon {
    width: 20%;
    font-size: 40px;
    margin-right: 20px;
    /*Not sure if this is the best way to align this*/
    margin-left: -10px;
}
</style>
