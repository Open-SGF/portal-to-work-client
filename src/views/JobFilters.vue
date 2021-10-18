<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/jobs" color="light"></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-center">Job Search Filter</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" :fullscreen="true">
            <div class="wrapper">
                <ion-label class="label">Position</ion-label>
                <ion-list>
                    <ion-item>
                        <ion-label>Education Level</ion-label>
                        <ion-select
                            interface="action-sheet"
                            :interface-options="{ header: 'Education Level' }"
                        >
                            <ion-select-option value="high school">High School</ion-select-option>
                            <ion-select-option value="bachelors"
                                >Bachelors Degree</ion-select-option
                            >
                            <ion-select-option value="masters">Masters Degree</ion-select-option>
                        </ion-select>
                    </ion-item>

                    <ion-item>
                        <ion-label>Job Types</ion-label>
                        <ion-select
                            interface="action-sheet"
                            :interface-options="{ header: 'Job Types' }"
                        >
                            <ion-select-option value="tech">Technology</ion-select-option>
                            <ion-select-option value="bus">Business</ion-select-option>
                            <ion-select-option value="cul">Culinary</ion-select-option>
                            <ion-select-option value="rtl">Retail</ion-select-option>
                            <ion-select-option value="rmt">Remote</ion-select-option>
                            <ion-select-option value="all">All</ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-list>
            </div>
            <div class="wrapper">
                <ion-label class="label">Travel</ion-label>
                <ion-list>
                    <ion-item href="#">
                        <ion-label>Edit Location</ion-label>
                        <ion-icon :icon="pencilOutline"></ion-icon>
                    </ion-item>

                    <ion-item>
                        <ion-label>Radius</ion-label>
                        <ion-select
                            interface="action-sheet"
                            :interface-options="{ header: 'Radius' }"
                        >
                            <ion-select-option value="5">5 Miles</ion-select-option>
                            <ion-select-option value="15">15 Miles</ion-select-option>
                            <ion-select-option value="25">25 Miles</ion-select-option>
                            <ion-select-option value="50">50 Miles</ion-select-option>
                            <ion-select-option value="100">100 Miles</ion-select-option>
                            <ion-select-option value="125">125 Miles+</ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonButtons, IonBackButton, IonLabel, IonSelectOption, IonSelect } from '@ionic/vue';
import { pencilOutline } from 'ionicons/icons';
export default {
    name: 'JobFilters',
    components: {
        IonButtons,
        IonBackButton,
        IonLabel,
        IonSelectOption,
        IonSelect,
    },
    data() {
        return { pencilOutline };
    },
};
</script>

<style>
.label {
    font-weight: bold;
}

.wrapper {
    padding: 30px 10px;
}
</style>
