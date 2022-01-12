<template>
    <ion-avatar class="date-wrapper">
        <div class="date">
            <span class="month ion-text-uppercase">{{ getMonth() }}</span>
            <span class="day">{{ date.getDate() }}</span>
        </div>
    </ion-avatar>
</template>

<script>
import { IonAvatar } from '@ionic/vue';
import { getThreeLetterMonth } from '../utils/date-utils';

export default {
    components: {
        IonAvatar,
    },
    props: {
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
.month {
    font-size: 13px;
}

.date {
    background: var(--ion-color-primary);
    color: var(--ion-color-primary-contrast);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    font-size: 14px;
}

.date-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
