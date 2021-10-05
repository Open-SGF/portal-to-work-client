<template>
    <ion-item class="event-listing-item">
        <DateIcon :date="date" />
        <ion-note class="text-wrapper">
            <h4>{{ title }}</h4>
            <h5>Location</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer
                malesuada. Non blandit massa enim nec dui nunc mattis. Eu turpis egestas pretium
                aenean pharetra magna ac. Blandit libero volutpat sed cras. Sit amet nisl suscipit
                adipiscing bibendum est ultricies integer. Et molestie ac feugiat sed lectus. Quis
                imperdiet massa tincidunt nunc. A condimentum vitae sapien pellentesque habitant
                morbi. Non blandit massa enim nec dui nunc mattis. Nisi scelerisque eu ultrices
                vitae auctor eu. Sed cras ornare arcu dui vivamus arcu felis bibendum. Donec ac odio
                tempor orci dapibus ultrices in iaculis nunc. Eu augue ut lectus arcu. Habitant
                morbi tristique senectus et netus et malesuada fames ac. Mattis rhoncus urna neque
                viverra.
            </p>
        </ion-note>
    </ion-item>
</template>

<script>
import { IonItem, IonNote } from '@ionic/vue';
import DateIcon from './DateIcon.vue';

export default {
    name: 'EventListingItem',
    components: {
        IonItem,
        IonNote,
        DateIcon,
    },
    props: {
        title: String,
        date: Date,
    },
    methods: {
        getMonth() {
            return getThreeLetterMonth(this.date);
        },
    },
};
</script>

<style scoped>
/* TODO: make sure all paddings/margins create equal whitespace around elements */
.text-wrapper {
    padding-bottom: 10px;
}

.text-wrapper > h4,
.text-wrapper > h5,
.text-wrapper > p {
    padding: 5px 0 0 5px;
    margin: 0 0;
}

p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
