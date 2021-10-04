<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/jobs" color="light"></ion-back-button>
                </ion-buttons>
                <ion-title>Job Search Filter</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="wrapper">
                <ion-label class="label">Position</ion-label>
                <ion-list>
                    <ion-item>
                        <ion-label>Education Level</ion-label>
                        <ion-select interface="popover">
                            <ion-select-option value="high school">High School</ion-select-option>
                            <ion-select-option value="bachelors"
                                >Bachelors Degree</ion-select-option
                            >
                            <ion-select-option value="masters">Masters Degree</ion-select-option>
                        </ion-select>
                    </ion-item>

                    <ion-item>
                        <ion-label>Job Types</ion-label>
                        <ion-select interface="popover">
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
                        <ion-select interface="popover">
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
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonLabel,
    IonSelectOption,
    IonSelect,
    IonItem,
    IonList,
} from '@ionic/vue';
import { pencilOutline } from 'ionicons/icons';
export default {
    name: 'JobFilters',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonContent,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonIcon,
        IonLabel,
        IonSelectOption,
        IonSelect,
        IonItem,
        IonList,
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
