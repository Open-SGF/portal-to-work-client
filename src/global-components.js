import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonList,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/vue';

export function registerGlobalCompoents(app) {
    app.component('ion-page', IonPage);
    app.component('ion-header', IonHeader);
    app.component('ion-toolbar', IonToolbar);
    app.component('ion-title', IonTitle);
    app.component('ion-content', IonContent);
    app.component('ion-icon', IonIcon);
    app.component('ion-list', IonList);
    app.component('ion-item', IonItem);
    app.component('ion-grid', IonGrid);
    app.component('ion-row', IonRow);
    app.component('ion-col', IonCol);
}
