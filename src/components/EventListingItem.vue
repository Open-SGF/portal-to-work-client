<template>
    <ion-item class="">
        <ion-avatar class="date-wrapper">
            <div class="date">
                <span class="month ion-text-uppercase">Nov</span>
                <span class="day">12</span>
            </div>
        </ion-avatar>
        <ion-label class="text-wrapper">
            <h2>Job Title</h2>
            <h3>Location</h3>
            <p>Lorem Ipsum baln</p>
        </ion-label>
    </ion-item>
</template>

<script>
import { IonItem, IonAvatar, IonLabel } from '@ionic/vue';

export default {
    name: 'EventListingItem',
    components: {
        IonItem,
        IonAvatar,
        IonLabel,
    },
};
</script>

<style scoped>
.date-wrapper {
    margin-right: 15px;
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
    margin-right: 15px;
}

.month {
    font-size: 11px;
}

.text-wrapper > h2,
.text-wrapper > h3,
.text-wrapper > p {
    padding: 4px;
}
</style>
