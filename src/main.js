import { createApp } from 'vue';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

import { RECAPTCHA_SITE_KEY } from './config.js';
import VueRecaptcha from 'vue3-recaptcha-v2';
import InstantSearch from 'vue-instantsearch/vue3/es';

import { registerGlobalCompoents } from './global-components';
import App from './App.vue';
import router from './router';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
    .use(IonicVue, { mode: 'md' })
    .use(VueRecaptcha, {
        siteKey: RECAPTCHA_SITE_KEY,
        alterDomain: false, // default: false
    })
    .use(router)
    .use(InstantSearch);

registerGlobalCompoents(app);

router.isReady().then(() => {
    app.mount('#app');
});
