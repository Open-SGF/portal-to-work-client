import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export function registerGlobalCompoents(app) {
    app.component('ion-page', IonPage);
    app.component('ion-header', IonHeader);
    app.component('ion-toolbar', IonToolbar);
    app.component('ion-title', IonTitle);
    app.component('ion-content', IonContent);
}
